# 📘 Guia Rápido - Tailwind CSS

## 🚀 Iniciar Desenvolvimento

### Frontend
```powershell
cd .\frontend
npm run tailwind:watch
```

### System
```powershell
cd .\system
npm run tailwind:watch
```

---

## 📦 Compilar para Produção

### Frontend
```powershell
cd .\frontend
npm run tailwind:build
```

### System
```powershell
cd .\system
npm run tailwind:build
```

---

## 📄 Estrutura de Arquivos

### Frontend
```
frontend/
├── public/styles/
│   ├── tailwind.css        ← Arquivo de entrada
│   ├── output.css          ← CSS compilado (NÃO editar!)
│   ├── main.css
│   └── main.scss
├── package.json
├── tailwind.config.js
└── node_modules/
```

### System
```
system/
├── global/styles/
│   ├── tailwind.css        ← Arquivo de entrada
│   ├── output.css          ← CSS compilado (NÃO editar!)
│   └── global.css
├── admin/
├── aluno/
├── package.json
├── tailwind.config.js
└── node_modules/
```

---

## 🎨 Exemplo de Uso

```html
<!-- Use classes do Tailwind no HTML -->
<div class="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
  <h1 class="text-4xl font-bold text-white">Bem-vindo ao Tailwind!</h1>
</div>
```

---

## ⚙️ Customizar Tailwind

Edite `tailwind.config.js` para adicionar cores, fontes, etc:

```javascript
export default {
  content: [
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        secondary: '#FF9500',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

Depois use: `class="text-primary"` ou `class="font-sans"`

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| Classes não aparecem | Verifique o `content` no `tailwind.config.js` |
| Erro ao instalar | Limpe cache: `npm cache clean --force` e `rm -r node_modules` |
| CSS não atualiza | Reinicie o `npm run tailwind:watch` |

---

## 📚 Recursos

- [Documentação oficial](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)

---

**Última atualização:** 28/03/2026 ✅
