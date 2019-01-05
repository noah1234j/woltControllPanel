import socket

#server perameters
HOST = '192.168.10.55'
PORT = 9993

#sets up the connection
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((HOST, PORT))

#Grabs the initial welcome message
response = s.recv(4096)
print(response.decode())

#now your turn :), What do you want it to do
#find all commands here... 
#https://github.com/LA1TV/Hyperdeck-Node-Controller/blob/master/Hyperdeck%20Commands.txt

#for testing purpose... Enter your command
x = 0
while x < 5:
	cmd = input("Type a command: ") + '\r\n'
	s.send(cmd.encode())
	print("command sent was...", cmd)
	response = s.recv(4096)
	print("resonse is: ", response.decode())
	x += 1

#safely terminates the connection
s.close()
