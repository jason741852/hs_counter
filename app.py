from flask import Flask, jsonify, request, Response, render_template
app = Flask(__name__, static_url_path='/static',static_folder = "static")


@app.route("/")
def root():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run()
