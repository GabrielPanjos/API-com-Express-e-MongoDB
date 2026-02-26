# 🚀 API com Express e MongoDB

API REST desenvolvida com **Node.js**, **Express** e **MongoDB**, focada em boas práticas de arquitetura, organização em camadas, tratamento centralizado de erros e integração com banco de dados NoSQL.

---

## 📌 Descrição

Este projeto demonstra a construção de uma API backend escalável utilizando padrões modernos de desenvolvimento, separação de responsabilidades e estrutura modular.

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express.js
* MongoDB
* Mongoose
* JavaScript (ES Modules)
* ESLint
* Dotenv

---

## 📂 Estrutura do Projeto

```bash
src/
 ├── config/        # Configurações gerais
 ├── controllers/   # Lógica das rotas
 ├── models/        # Schemas do MongoDB
 ├── routes/        # Definição das rotas
 ├── middlewares/   # Middlewares e tratamento de erros
 └── app.js         # Configuração da aplicação
server.js           # Inicialização do servidor
```

---

## ⚙️ Funcionalidades

* ✅ Criação de endpoints REST
* ✅ Integração com MongoDB
* ✅ Operações CRUD
* ✅ Tratamento global de erros
* ✅ Organização em padrão MVC
* ✅ Uso de variáveis de ambiente

---

## ▶️ Como Executar o Projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/GabrielPanjos/API-com-Express-e-MongoDB.git
```

### 2️⃣ Acesse a pasta do projeto

```bash
cd API-com-Express-e-MongoDB
```

### 3️⃣ Instale as dependências

```bash
npm install
```

### 4️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
MONGODB_URI=sua_string_de_conexao
```

### 5️⃣ Execute o servidor

```bash
npm start
```

ou

```bash
node server.js
```

---

## 🔗 Exemplos de Rotas

| Método | Rota           | Descrição              |
| ------ | -------------- | ---------------------- |
| GET    | /              | Verifica status da API |
| GET    | /resources     | Lista registros        |
| POST   | /resources     | Cria registro          |
| PUT    | /resources/:id | Atualiza registro      |
| DELETE | /resources/:id | Remove registro        |

---

## 🧪 Scripts Disponíveis

```bash
npm start   # Inicia o servidor
npm run dev # Ambiente de desenvolvimento (se configurado)
```

---

## 📈 Boas Práticas Aplicadas

* Separação em camadas (MVC)
* Middlewares reutilizáveis
* Tratamento centralizado de erros
* Validação de dados
* Uso seguro de variáveis de ambiente

---

## 👨‍💻 Autor

**Gabriel Pereira**

* GitHub: [https://github.com/GabrielPanjos](https://github.com/GabrielPanjos)

---

## ⭐ Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias.

---

## 📄 Licença

Este projeto está sob a licença MIT.
