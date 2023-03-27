INSERT INTO Cargos (nome_cargo, salario, descricao, requisitos, data_criacao)
VALUES 
    ('Desenvolvedor Full Stack', 8000.00, 'Desenvolvimento de aplicações web e mobile', 'Experiência com HTML, CSS, JavaScript, React, Node.js e banco de dados SQL', '2022-03-20'),
    ('Arquiteto de Software', 12000.00, 'Definição da arquitetura de sistemas complexos', 'Experiência em arquitetura de software, conhecimento em tecnologias modernas, habilidades de liderança', '2022-03-20'),
    ('Analista de Testes', 6000.00, 'Planejamento e execução de testes de software', 'Conhecimento em ferramentas de teste e metodologias de teste de software', '2022-03-20'),
    ('Gerente de Projetos', 15000.00, 'Coordenação de equipes de projetos de software', 'Experiência em gestão de projetos, habilidades de liderança, conhecimento em metodologias ágeis', '2022-03-20'),
    ('Engenheiro de Dados', 10000.00, 'Modelagem e manipulação de dados', 'Experiência em linguagens de programação para manipulação de dados, conhecimento em bancos de dados relacionais e não-relacionais', '2022-03-20');
    
INSERT INTO Departamentos (nome_departamento, descricao, data_criacao)
VALUES
('Desenvolvimento', 'Responsável pelo desenvolvimento de software', '2022-01-01'),
('Suporte Técnico', 'Responsável pelo atendimento ao cliente', '2022-01-02'),
('Marketing', 'Responsável pela divulgação e publicidade da empresa', '2022-01-03'),
('Recursos Humanos', 'Responsável pela gestão de pessoas na empresa', '2022-01-04');

INSERT INTO Funcionarios (nome, email, cpf, data_nascimento, cargo_id, departamento_id, data_criacao)
VALUES
    ('Ana Silva', 'ana.silva@empresa.com', '11122233344', '1995-06-12', 1, 1, NOW()),
    ('Pedro Santos', 'pedro.santos@empresa.com', '22233344455', '1992-04-23', 2, 1, NOW()),
    ('Julia Oliveira', 'julia.oliveira@empresa.com', '33344455566', '1991-09-01', 3, 2, NOW()),
    ('Lucas Souza', 'lucas.souza@empresa.com', '44455566677', '1989-02-18', 4, 3, NOW()),
    ('Mariana Rodrigues', 'mariana.rodrigues@empresa.com', '55566677788', '1994-12-07', 5, 4, NOW());

INSERT INTO Salarios (funcionario_id, valor, data_criacao)
VALUES
    (1, 8000.00, NOW()),
    (2, 12000.00, NOW()),
    (3, 6000.00, NOW()),
    (4, 15000.00, NOW()),
    (5, 10000.00, NOW());
    
INSERT INTO Ferias (funcionario_id, data_inicio, data_fim)
VALUES
    (1, '2022-01-01', '2022-01-10'),
    (2, '2022-02-15', '2022-02-28'),
    (3, '2022-03-20', '2022-03-29'),
    (4, '2022-04-05', '2022-04-15'),
    (5, '2022-05-01', '2022-05-10'),
    (1, '2022-06-01', '2022-06-10'),
    (2, '2022-07-15', '2022-07-28'),
    (3, '2022-08-20', '2022-08-29'),
    (4, '2022-09-05', '2022-09-15'),
    (5, '2022-10-01', '2022-10-10');
    
INSERT INTO Projetos (nome, data_inicio, data_fim)
VALUES
    ('Sistema de Controle Financeiro', '2022-01-01', '2022-06-30'),
    ('Redesign da Plataforma de E-commerce', '2022-02-01', '2022-05-31'),
    ('Aplicativo de Delivery de Comida', '2022-03-01', '2022-08-31'),
    ('Sistema de Gestão de Recursos Humanos', '2022-04-01', '2022-09-30'),
    ('Sistema de Monitoramento de Redes', '2022-05-01', '2022-10-31');

INSERT INTO Participacao_Projetos (projeto_id, funcionario_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 2),
    (2, 3),
    (3, 3),
    (3, 4),
    (4, 4),
    (4, 5),
    (5, 1),
    (5, 5);


INSERT INTO Times (nome, responsavel_id) VALUES
('Time de Desenvolvimento', 1),
('Time de Testes', 2),
('Time de Infraestrutura', 3),
('Time de Design', 4),
('Time de Projetos', 5);



INSERT INTO Participacao_Times (time_id, funcionario_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 2),
(2, 3),
(2, 4),
(3, 3),
(3, 4),
(3, 5),
(4, 1),
(4, 2),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5);

INSERT INTO Tarefas (nome, descricao, criador_id, responsavel_id, data_inicio, data_fim, time_id, projeto_id) VALUES
('Desenvolver tela de login', 'Criar tela de login com campos de usuário e senha', 1, 2, '2023-03-22', '2023-03-25', 1, 1),
('Implementar funcionalidade de busca', 'Permitir que o usuário busque por clientes no sistema', 2, 3, '2023-03-22', '2023-03-26', 1, 1),
('Corrigir erro de validação', 'Corrigir erro de validação que ocorre ao cadastrar novo cliente', 3, 4, '2023-03-23', '2023-03-25', 2, 1),
('Criar protótipo de layout', 'Criar protótipo de layout para nova funcionalidade', 4, 5, '2023-03-23', '2023-03-26', 3, 2),
('Revisar código de backend', 'Revisar código do backend para garantir qualidade e performance', 5, 1, '2023-03-24', '2023-03-27', 4, 3),
('Testar integração com API externa', 'Realizar testes de integração com API externa de pagamentos', 1, 2, '2023-03-24', '2023-03-28', 5, 4),
('Ajustar layout para mobile', 'Ajustar layout da aplicação para dispositivos móveis', 2, 3, '2023-03-25', '2023-03-28', 2, 2),
('Desenvolver nova funcionalidade', 'Desenvolver nova funcionalidade de gestão de estoque', 3, 4, '2023-03-25', '2023-03-29', 3, 2),
('Corrigir erro de performance', 'Corrigir erro que causa lentidão no sistema', 4, 5, '2023-03-26', '2023-03-29', 4, 3),
('Testar integração com gateway de pagamento', 'Realizar testes de integração com novo gateway de pagamento', 5, 1, '2023-03-26', '2023-03-30', 5, 4);
