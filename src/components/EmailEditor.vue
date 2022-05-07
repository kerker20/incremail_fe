<template>
  <div
    onLoad="hide"
    v-bind:id="id"
    class="unlayer-editor"
    v-bind:style="{ minHeight: minHeight }"
  >
  </div>
</template>

<script>
import { loadScript } from "./loadScript";
import pkg from "../../package.json";

let lastEditorId = 0;

export default {
  name: "EmailEditor",
  props: {
    editorId: String,
    options: Object,
    projectId: Number,
    tools: Object,
    appearance: Object,
    locale: String,
    minHeight: {
      type: String,
      default: "100%",
    },
  },
  computed: {
    id() {
      return this.editorId || `editor-${++lastEditorId}`;
    },
  },
  mounted() {
    loadScript(this.loadEditor.bind(this));
  },
  methods: {
    hide() {
      
document.querySelector("#editor > div > div > div > div > div > div > div.sc-jifIRw.kIFJtK.blockbuilder-preferences.right > div > div > div.sc-cbDGPM.gCuogY.blockbuilder-tools-panel.bootstrap > a").style.display = "none"
    },
    loadEditor() {
      const options = this.options || {};

      if (this.projectId) {
        options.projectId = this.projectId;
      }

      if (this.tools) {
        options.tools = this.tools;
      }

      if (this.appearance) {
        options.appearance = this.appearance;
      }

      if (this.locale) {
        options.locale = this.locale;
      }

      /* global unlayer */
      this.editor = unlayer.createEditor({
        ...options,
        id: this.id,
        displayMode: "email",
        source: {
          name: pkg.name,
          version: pkg.version,
        },
      });

      this.$emit("load");

      this.editor.addEventListener("editor:ready", () => {
        this.$emit("ready");
      });
    },
    loadDesign(design) {
      console.log(design);
      this.editor.loadDesign(design);
    },
    saveDesign(callback) {
      this.editor.saveDesign(callback);
    },
    exportHtml(callback) {
      this.editor.exportHtml(callback);
    },
  },
};
</script>

<style scoped>
.unlayer-editor {
  flex: 1;
  display: flex;
}
.frFaYW .blockbuilder-branding .fa-bolt {
  display: none;
}
#cont::-webkit-scrollbar {
  display: none;
}
span.brand{
  display: none;
}
</style>
