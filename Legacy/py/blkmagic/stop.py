import socket

#server perameters
HOST = '192.168.10.55'
PORT = 9993

#sets up the connection
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((HOST, PORT))

#starts recording
s.send(b'stop \r\n')

#safely terminates the connection
s.close()
