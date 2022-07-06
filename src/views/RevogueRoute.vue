<template>
  <div class="container pt-6">
    <div class="mb-4">
      <div class="field">
        <label class="label">Frame Slot e Porta</label>
        <div class="control is-flex">
          <input
            class="input is-small"
            type="text"
            placeholder="0"
            name="slot"
            maxlength="2"
            size="2"
            required
            pattern="[0-9]|1[0-8]"
            title="Verifique o Slot. De 0 a 18."
            disabled
          />
          <span class="px-1">/</span>
          <input
            v-model.number="slot"
            class="input is-small"
            type="text"
            name="slot"
            maxlength="2"
            size="2"
            required
            pattern="[0-9]|1[0-8]"
            placeholder="Verifique o Slot. De 0 a 18."
          />
          <span class="px-1">/</span>
          <input
            v-model.number="porta"
            class="input is-small"
            type="text"
            name="porta"
            maxlength="2"
            size="2"
            required
            pattern="[0-9]|1[0-6]"
            placeholder="use de 0 a 16. Verifique a porta. "
          />
        </div>
      </div>
    </div>
    <div class="mb-4">
      <div class="field">
        <label class="label">Número da ONU</label>
        <div class="control">
          <input
            type="number"
            v-model="ont"
            class="input is-small"
            placeholder="Digite o número da ONU a ser adicionada"
            maxlength="3"
          />
        </div>
      </div>
    </div>
    <hr class="dropdown-divider" />
    <div
      class="mb-4"
      v-if="
        String(slot).length > 0 &&
        String(porta).length > 0 &&
        String(ont).length > 0
      "
    >
      <article class="message is-info">
        <div class="message-header">
          <p>Código gerado</p>
          <button class="button is-success" @click="copyText">Copiar</button>
        </div>
        <div class="message-body m-0 p-0">
          <pre class="is-size-6" style="background-color: transparent">{{
            codeGenerated
          }}</pre>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const slot = ref("9");
const porta = ref("");
const ont = ref("");

const codeGenerated = computed(() => {
  return `undo interactive
undo service-port port 0/${slot.value}/${porta.value} ont ${ont.value}
interface gpon 0/${slot.value}
ont delete ${porta.value} ${ont.value}
quit
save`;
});

const copyText = async () => {
  await navigator.clipboard.writeText(codeGenerated.value);
  alert("código copiado");
};
</script>
<style lang="scss"></style>
