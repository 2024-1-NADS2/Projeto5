create database ProjetoPI;
use ProjetoPI;

CREATE TABLE Eventos (
Título VARCHAR(255),
Local VARCHAR(255),
Data DATE,
Como_Ajudar TEXT,
PRIMARY KEY (Título)
);

CREATE TABLE ONGs (
Nome VARCHAR(255),
Local VARCHAR(255),
Descrição TEXT,
Opções_de_voluntariado TEXT,
PRIMARY KEY (Nome)
);

CREATE TABLE Voluntários (
ID INT AUTO_INCREMENT,
Nome VARCHAR(255),
Data_de_Nascimento DATE,
Email VARCHAR(255),
Senha VARCHAR(255),
PRIMARY KEY (ID)
);

CREATE TABLE Eventos_ONGs (
Evento_Título VARCHAR(255),
ONG_Nome VARCHAR(255),
FOREIGN KEY (Evento_Título) REFERENCES Eventos(Título),
FOREIGN KEY (ONG_Nome) REFERENCES ONGs(Nome),
PRIMARY KEY (Evento_Título, ONG_Nome)
);

CREATE TABLE Eventos_Voluntários (
Evento_Título VARCHAR(255),
Voluntário_ID INT,
FOREIGN KEY (Evento_Título) REFERENCES Eventos(Título),
FOREIGN KEY (Voluntário_ID) REFERENCES Voluntários(ID),
PRIMARY KEY (Evento_Título, Voluntário_ID)
);