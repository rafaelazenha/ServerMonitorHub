# ServerMonitorHub 🚀

O **ServerMonitorHub** é uma API centralizada para monitoramento de servidores e sistemas. Desenvolvida em Node.js, ela atua como o cérebro de uma operação de infraestrutura, coletando métricas de baixo nível (hardware) e transformando-as em dados estruturados para análise.



---

## 🛠️ Tecnologias e Dependências

A stack foi selecionada para garantir performance e facilidade na manipulação de grandes volumes de logs:

* **Express** Framework web para gerenciar rotas de coleta e entrega de dados.
* **Mongoose** ODM para modelagem e persistência de dados no **MongoDB**.
* **Systeminformation** A biblioteca principal para extrair dados reais de CPU, Memória, Rede e Disco.
* **Dotenv** Gerenciamento seguro de variáveis de ambiente.
* **CORS** Controle de acesso para permitir que painéis de Dashboard consumam a API com segurança.

---

## 💾 Armazenamento no MongoDB

Diferente de sistemas que mostram apenas dados voláteis, o **ServerMonitorHub** utiliza o **MongoDB** para garantir a persistência. 

> **Por que MongoDB?** A natureza não relacional do MongoDB permite que as métricas de hardware (que podem variar de servidor para servidor) sejam armazenadas de forma flexível sem quebras de schema. Todos os dados coletados são gravados cronologicamente, permitindo a criação de gráficos históricos de performance.

---