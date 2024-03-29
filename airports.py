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