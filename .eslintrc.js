module.exports = {
    // Usa el parser de Vue para archivos .vue
    parser: "vue-eslint-parser",
  
    // Configuración específica del parser
    parserOptions: {
      parser: "@babel/eslint-parser", // Usa el parser de Babel
      requireConfigFile: false, // 👈 Opción clave para ignorar la falta de archivo de Babel
      babelOptions: {
        presets: ["@babel/preset-env"], // Si tienes un preset de Babel
      },
      sourceType: "module", // Necesario para usar imports ES6
    },
  
    // Extiende configuraciones estándar (ejemplo para Vue)
    extends: [
      "eslint:recommended",
      "plugin:vue/vue3-recommended", // Ajusta según tu versión de Vue
    ],
  
    // Reglas personalizadas (opcional)
    rules: {
      "no-console": "warn",
    },
  };