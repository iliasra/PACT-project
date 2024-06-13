import socketio

# create a Socket.IO server
sio = socketio.Server()

# wrap with a WSGI application
app = socketio.WSGIApp(sio)


@sio.event
def connect(sid, environ, auth):
    print('connect ', sid)
    
@sio.event
def disconnect(sid):
    print('disconnect ', sid)