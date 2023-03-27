CREATE DATABASE empresa_tecnologia;
USE empresa_tecnologia;

CREATE TABLE Cargos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_cargo VARCHAR(50) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    descricao VARCHAR(255),
    requisitos VARCHAR(255),
    data_criacao DATE NOT NULL,
    ultima_atualizacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Departamentos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_departamento VARCHAR(50) NOT NULL,
    descricao VARCHAR(255),
    data_criacao DATE NOT NULL,
    ultima_atualizacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Funcionarios (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    cargo_id INT NOT NULL,
    CONSTRAINT FK_Cargos_Funcionarios FOREIGN KEY (cargo_id) REFERENCES Cargos(id),
    data_criacao DATE NOT NULL,
    ultima_atualizacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE Departamentos
ADD COLUMN funcionario_responsavel INT,
ADD CONSTRAINT fk_funcionario_responsavel FOREIGN KEY (funcionario_responsavel) REFERENCES Funcionarios(id);

ALTER TABLE Funcionarios
ADD COLUMN departamento_id INT,
ADD CONSTRAINT fk_departamento_id FOREIGN KEY (departamento_id) REFERENCES Departamentos(id);

CREATE TABLE Salarios (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    funcionario_id INT NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    data_criacao DATETIME NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES Funcionarios(id)
);

CREATE TABLE Ferias (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    funcionario_id INT NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES Funcionarios(id)
);

CREATE TABLE Projetos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL
);

CREATE TABLE Participacao_Projetos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    projeto_id INT NOT NULL,
    funcionario_id INT NOT NULL,
    FOREIGN KEY (projeto_id) REFERENCES Projetos(id),
    FOREIGN KEY (funcionario_id) REFERENCES Funcionarios(id)
);

CREATE TABLE Times (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    responsavel_id INT NOT NULL,
    FOREIGN KEY (responsavel_id) REFERENCES Funcionarios(id)
);

CREATE TABLE Participacao_Times (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    time_id INT NOT NULL,
    funcionario_id INT NOT NULL,
    FOREIGN KEY (time_id) REFERENCES Times(id),
    FOREIGN KEY (funcionario_id) REFERENCES Funcionarios(id)
);

CREATE TABLE Tarefas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    criador_id INT NOT NULL,
    responsavel_id INT NOT NULL,
    data_inicio DATE,
    data_fim DATE,
    time_id INT NOT NULL,
    projeto_id INT NOT NULL,
    FOREIGN KEY (criador_id) REFERENCES Funcionarios(id),
    FOREIGN KEY (responsavel_id) REFERENCES Funcionarios(id),
    FOREIGN KEY (time_id) REFERENCES Times(id),
    FOREIGN KEY (projeto_id) REFERENCES Projetos(id)
);
