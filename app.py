"""
Freeze Flask app into GitHub Pages
https://github.com/AshrithSagar/frozen-flask-gh-pages
"""
from os import path
from pathlib import Path

from flask import Flask, render_template
from flask_frozen import Freezer


app = Flask(__name__)
# Enter your GitHub Pages URL here instead of frozen-flask-gh-pages
app.config['FREEZER_BASE_URL'] = 'https://docs/CQD/'

# As configured in GitHub Pages Settings
app.config['FREEZER_DESTINATION'] = 'docs'

app.config['FREEZER_RELATIVE_URLS'] = False  # Default
app.config['FREEZER_IGNORE_MIMETYPE_WARNINGS'] = True
app.config['FREEZER_DESTINATION_IGNORE'] = ['.nojekyll']  # For GitHub Pages
freezer = Freezer(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/<path:page>/")
def pages(page):
    return render_template(page.lower() + ".html")


if __name__ == '__main__':
    freezer.freeze()  # Freeze the app into FREEZER_DESTINATION
    # freezer.serve()  # Serve the app locally from FREEZER_DESTINATION

    # freezer.run()  # Choose for URL checking
    app.run(debug=True)  # Choose to run locally from Flask
