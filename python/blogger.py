import xml.etree.ElementTree as ET
import os.path
import json

links = []

def print_link_elements(xml_file):
    if not os.path.isfile(xml_file):
        print(f"File '{xml_file}' does not exist.")
        return
    
    tree = ET.parse(xml_file)
    root = tree.getroot()

    link_elements = root.findall('.//{*}entry/{*}link')

    for link in link_elements:
        type = link.get('type')
        title = link.get('title')
        href = link.get('href')
        rel = link.get('rel')
        
        if rel=="alternate" and not ("showComment" in href):
        	l = {
        		'href':href,
        		'title':title
        	}
        	links.append(l)
        
    links_json = json.dumps(links, indent=4)
    print(links_json)

print_link_elements('blog-06-17-2023.xml')
