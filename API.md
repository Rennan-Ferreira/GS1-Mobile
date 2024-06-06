# API Documentation

Esta documentação descreve os endpoints utilizados no aplicativo de reciclagem. Todos os endpoints são implementados usando Firebase Firestore.

## Endpoints

### 1. Create Recycling Item

**Endpoint:** `/recyclingItems`

**Método:** `POST`

**Descrição:** Este endpoint adiciona um novo item de reciclagem ao Firestore.

**Requisição:**

```javascript
const addItem = async () => {
  try {
    const docRef = await addDoc(collection(db, "recyclingItems"), {
      title: "Título do Item",
      phone: "Telefone para Contato",
      image: "URL da Imagem"
    });
    alert("Item de Reciclagem Cadastrado");
  } catch (e) {
    console.error("Erro ao adicionar documento: ", e);
  }
};
```

**Retorno de Sucesso:**

```json
{
  "message": "Item de Reciclagem Cadastrado",
  "id": "ID do documento gerado pelo Firestore"
}
```

**Retorno de Erro:**

```json
{
  "message": "Erro ao adicionar documento",
  "error": "Detalhes do erro"
}
```

### 2. Read Recycling Items

**Endpoint:** `/recyclingItems`

**Método:** `GET`

**Descrição:** Este endpoint recupera todos os itens de reciclagem do Firestore.

**Requisição:**

```javascript
const getItems = async () => {
  let items = [];
  const querySnapshot = await getDocs(collection(db, "recyclingItems"));
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  setRecyclingItems(items);
};
```

**Retorno de Sucesso:**

```json
[
  {
    "id": "ID do documento",
    "title": "Título do Item",
    "phone": "Telefone para Contato",
    "image": "URL da Imagem"
  },
  ...
]
```

**Retorno de Erro:**

```json
{
  "message": "Erro ao recuperar documentos",
  "error": "Detalhes do erro"
}
```

### 3. Delete Recycling Item

**Endpoint:** `/recyclingItems/:id`

**Método:** `DELETE`

**Descrição:** Este endpoint deleta um item de reciclagem específico do Firestore.

**Requisição:**

```javascript
const deleteItem = async (id) => {
  try {
    await deleteDoc(doc(db, "recyclingItems", id));
    alert("Item de Reciclagem Removido");
  } catch (e) {
    console.error("Erro ao remover documento: ", e);
  }
};
```

**Retorno de Sucesso:**

```json
{
  "message": "Item de Reciclagem Removido"
}
```

**Retorno de Erro:**

```json
{
  "message": "Erro ao remover documento",
  "error": "Detalhes do erro"
}
```

## Exemplos de Uso

### Criar um Novo Item de Reciclagem

```javascript
const addItem = async () => {
  try {
    const docRef = await addDoc(collection(db, "recyclingItems"), {
      title: "Garrafa PET",
      phone: "123456789",
      image: "https://example.com/image.jpg"
    });
    alert("Item de Reciclagem Cadastrado");
  } catch (e) {
    console.error("Erro ao adicionar documento: ", e);
  }
};
```

### Listar Todos os Itens de Reciclagem

```javascript
const getItems = async () => {
  let items = [];
  const querySnapshot = await getDocs(collection(db, "recyclingItems"));
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  setRecyclingItems(items);
};
```

### Deletar um Item de Reciclagem

```javascript
const deleteItem = async (id) => {
  try {
    await deleteDoc(doc(db, "recyclingItems", id));
    alert("Item de Reciclagem Removido");
  } catch (e) {
    console.error("Erro ao remover documento: ", e);
  }
};
```

## Considerações Finais

- Certifique-se de configurar corretamente o Firebase e o Firestore no seu projeto.
- Garanta que as permissões de segurança do Firestore estejam configuradas corretamente para permitir as operações desejadas.

