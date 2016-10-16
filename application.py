from flask import Flask, render_template, send_from_directory, redirect

application = Flask(__name__)


@application.route('/')
def index():
    return render_template('index.html')


@application.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('static/js', path)


@application.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('static/css', path)


@application.route('/img/<path:path>')
def send_img(path):
    return send_from_directory('static/img', path)


@application.route('/lib/<path:path>')
def send_lib(path):
    return send_from_directory('static/lib', path)


@application.route('/favicon.ico')
def favicon():
    return send_from_directory('static', 'favicon.ico', mimetype='image/vnd.microsoft.icon')


@application.route('/code')
def code():
    return redirect('https://github.com/Brok-Bucholtz/Brok.Info', code=302)

if __name__ == '__main__':
    application.run()
