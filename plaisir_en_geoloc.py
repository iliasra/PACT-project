import time
import socket
import random

site = "137.194.210.159"
port = 80

def bar(p, N):
    t = ""
    for i in range(0,N):
        if (i/N) <= p :
            t += "*"
        else:
            t += "-"
    print(t)

while (True):

    j = random.randint(2,4)
    
    for k in range(0,50):
        time.sleep(j/50)
        #print("\n\n\n\n\n\n\n\n\n\n\n")
        bar(k/50, 50)

    try:
        loc = random.randint(1,4)
        message = "/?bipID=" + "ff3000000b02" + "&loc=" + "3"##str(loc)

        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((site, port))
        
        msg = "GET http://"+ site + message + " HTTP/1.1\r\n\r\n"  
        print(msg)
        
        s.send(msg.encode())
        data = s.recv(1024).decode() 
        s.close()
        time.sleep(5)
    except Exception:
        pass
