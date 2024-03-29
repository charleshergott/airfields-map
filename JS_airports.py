import pandas as pd
import folium

# Read data from Excel
data = pd.read_excel(r'C:\Users\charl\Downloads\iata-icao.xls')


# Create a map
mymap = folium.Map(location=[51.505, -0.09], zoom_start=3)

# Iterate through the data and add markers
for index, row in data.iterrows():
    folium.Marker(location=[row['Latitude'], row['Longitude']], popup=row['Name']).add_to(mymap)

# Save the map
mymap.save('map_with_markers.html')


# Generate JavaScript code to add markers to your Leaflet map
js_code = """
<script>
    let map = L.map('map').setView([51.505, -0.09], 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
"""

# Add markers based on data from the Excel file
for index, row in data.iterrows():
    js_code += f"""
    L.marker([{row['Latitude']}, {row['Longitude']}]).addTo(map)
        .bindPopup('{row['Name']}');
    """

# Add the rest of the JavaScript code
js_code += """
</script>
"""

# Save the JavaScript code to a file
with open('markers.js', 'w') as f:
    f.write(js_code)
