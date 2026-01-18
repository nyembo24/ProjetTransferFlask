from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
app=FastAPI(title="P2P Share LAN")
temlete=Jinja2Templates(directory="templetes")