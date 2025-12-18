import json
import requests
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# --- HARAM KEYWORDS LIST ---
HARAM_KEYWORDS = ['pork', 'lard', 'bacon', 'ham', 'gelatin', 'alcohol', 'ethanol', 'wine', 'beer', 'rum', 'carmine']

def check_halal_status(ingredients_text):
    if not ingredients_text:
        return "Unknown - No Ingredients Listed"
    
    # Check for haram keywords
    found_haram = [word for word in HARAM_KEYWORDS if word in ingredients_text.lower()]
    
    if found_haram:
        return f"HARAM AVOID (Contains: {', '.join(found_haram)})"
    return "LIKELY HALAL (Double check source)"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/scan', methods=['POST'])
def scan():
    data = request.json
    barcode = data.get('barcode')
    
    if not barcode:
        return jsonify({"error": "No barcode provided"}), 400
    
    # 1. Check OpenFoodFacts API
    url = f"https://world.openfoodfacts.org/api/v0/product/{barcode}.json"
    try:
        response = requests.get(url)
        product_data = response.json()
        
        if product_data.get('status') == 1:
            product = product_data['product']
            name = product.get('product_name', 'Unknown Product')
            ingredients = product.get('ingredients_text', '')
            image = product.get('image_url', '')
            
            # 2. Analyze Ingredients
            status = check_halal_status(ingredients)
            
            return jsonify({
                "found": True,
                "product_name": name,
                "ingredients": ingredients,
                "image": image,
                "halal_status": status
            })
        else:
            return jsonify({"found": False, "error": "Product not found"})
            
    except Exception as e:
        return jsonify({"error": "Internet connection failed"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)