**Instalando o Tailwind CSS**
* npm install -D tailwindcss postcss autoprefixer

**Criando o arquivo de configuração do Tailwind**
* npx tailwindcss init -p

**Configurando o Storybook**
* npx sb init --builder @storybook/builder-vite
* npm run storybook
* Instale o plugin MDX

**Instalar o clsx para variar classes**
* npm install --save clsx

**Instalando radix-ui do tipo utilities slot**
* npm install @radix-ui/react-slot

**Instalar o componente checkbox do radix-ui**
* npm install @radix-ui/react-checkbox

**Fazer deploy do storybook no github pages**
* npm i @storybook/storybook-deployer --save-dev

**Instale o github cli Ubuntu**
type -p curl >/dev/null || sudo apt install curl -y
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
&& sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y

**Login no github Cli**
* gh auth login
* Insira sua senha ssh
* escolha a autenticação via browser ou key

**Criar repositório no github com o gh**
* gh repo create

**Insira os dados solicitados pelo gh Cli**
* Escolha criar o repósitorio com o push local
* Insira o nome do repositório
* Descrição
* Visibilidade
* Adicione um acesso remoto como 'yes'

**Faça deploy do code no github**
* git init
* git add .
* git commit -m 'Initial commit'
* git branch -M main
* git remote add origin git@...
* git push -u origin main
* Enter passphrase for key ...(frase de acesso ssh)

**ver o repositório no browser**
* gh repo view -w