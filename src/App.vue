<template>
  <div class="container pt-6">
    <div class="mb-4">
      <div class="field">
        <label class="label">Frame Slot e Porta:</label>
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
        <label class="label">Cole o número de série da ONU:</label>
        <div class="control">
          <input
            type="text"
            name="serie"
            v-model="serie"
            maxlength="16"
            class="input is-small"
            size="16"
            required
            pattern="[A-Z0-9]{16,16}"
            placeholder="O número de série deve conter 16 caracteres entre letras MAIÚSCULAS e números."
          />
        </div>
      </div>
    </div>
    <div class="mb-4">
      <div class="field">
        <label class="label">Nome do cliente:</label>
        <div class="control">
          <input
            type="text"
            v-model="nome"
            placeholder="Digite o nome do cliente"
            name="ont"
            class="input is-small"
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
    <div class="mb-4">
      <article class="message is-info">
        <div class="message-header">
          <p>Código gerado</p>
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

const slot = ref("");
const porta = ref("");
const serie = ref("");
const nome = ref("");
const ont = ref("");

const codeGenerated = computed(() => {
  return `
    interface gpon 0/${slot.value}
    ont add ${porta.value} ${ont.value} sn-auth ${serie.value} omci ont-lineprofile-id 1 ont-srvprofile-id 1 desc ${nome.value}
    ont port native-vlan ${porta.value} ${ont.value} eth 1 vlan 100 priority 0
    quit
    service-port vlan 100 gpon 0/${slot.value}/${porta.value} ont ${ont.value} gemport 1 multi-service user-vlan 100 tag-transform translate
    save
`
    .split("    ")
    .join("");
});
</script>
<style lang="scss">
@import "./styles/global.scss";
</style>
