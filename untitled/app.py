from flask import Flask,render_template,request,jsonify
from mocks import Search
app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('pages/home.html')

# @app.route('/formulaire',methods=('GET','POST'))
# def get_location():
# 	loc='Paris'
# 	if request.method=='POST':
# 		loc=request.form['location']
#
#
# 	return render_template('pages/formulaire.html',loc=loc)

@app.route('/processing',methods=['POST'])
def get_information():
	
	# if request.method=='POST':
	extr=request.form['extract']
	

	return jsonify({'response':extr})

@app.route('/formulaire')
def get_data():

	return render_template('pages/formulaire2.html')



if __name__ == '__main__':
    app.run(debug=True,port=5000)
