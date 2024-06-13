import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import SocketContext from './SocketContext';

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://137.194.210.159:80", {
        reconnectionDelayMax: 10000,
    }); // Remplacez l'URL par celle de votre serveur socketIO
    newSocket.on("connect", () => {
        console.log(socket.connected); // true
    });
    setSocket(newSocket);

    return () => newSocket.close(); // Ferme la connexion du socket lorsque le composant est démonté
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
