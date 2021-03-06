#From the official Python runtime as a paretn Image
#FROM python:2.7-slim

#From the official Node.js runtime as a pattern Image
FROM node:10

#Set the working directory to /app
WORKDIR /app

#Copy the current directory contents into the container at /app
COPY . /app

# Set instructions on build.
ONBUILD ADD package.json /app/
ONBUILD RUN npm install
ONBUILD ADD . /app

RUN npm install

#Install any needed packages specified in requirements.txt 
#RUN pip install --trusted-host pypi.python.org -r requirements.txt

#Make port 80 available to the world outside this container
EXPOSE 80

#Define enviroment variable
ENV NAME World

#Run app.py when the conatiner launches
CMD ["npm", "start"]
