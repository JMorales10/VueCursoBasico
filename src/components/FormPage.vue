<template>
  <div class="content-wrapper">
    <div class="title">
      Create your own form
    </div>
    <div>
      <div
        v-for="(type, idx) in formTypes"
        :key="idx"
        class="d-flex justify-between w-50 p-3"
      >
        <div>{{ type.name }}</div>
        <div class="d-flex justify-between">
          <input
            v-if="type.inputToConfig !== undefined"
            v-model="type.inputToConfig"
            type="text"
          >
          <div
            class="icon pl-2"
            @click="() => addField(type)"
          >
            ➕
          </div>
        </div>
      </div>
      <div class="d-flex justify-between w-50 p-3">
        <div>{{ radioButton.name }}</div>
        <div class="d-flex justify-between">
          <input
            v-model="radioButton.inputToConfig"
            type="text"
          >
          <div
            class="icon pl-2"
            @click="addRadioButton"
          >
            ➕
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="formFields.length"
      class="separator"
    />
    <div
      v-for="(field, idx) in formFields"
      :key="idx"
      class="d-flex justify-between w-50 p-3"
    >
      <!-- EXAMPLE_BAD idx -->
      <component
        :is="field.component"
        v-model="field.value"
        :element="field.inputToConfig"
        :elements="field.elements"
        :name="field.name"
      />
      <div
        class="icon pl-2"
        @click="() => removeInput(idx)"
      >
        ✖
      </div>
    </div>
    <div
      v-if="output.length"
      class="separator"
    />
    <!-- eslint-disable vue/no-v-html -->
    <button>
      <div v-html="output" />
    </button>
    <!--eslint-enable-->
  </div>
</template>

<script>
import CheckBox from "frontend/components/Check-Box.vue"
import RadioButton from "frontend/components/Radio-Button.vue"
import TextArea from "frontend/components/Text-Area.vue"
import TextField from "frontend/components/Text-Field.vue"
export default {
  components: {
    CheckBox,
    RadioButton,
    TextArea,
    TextField,
  },
  data () {
    return {
      formTypes: [
        {
          name: "Text Field",
          component: TextField,
        },
        {
          name: "Text Area",
          component: TextArea,
        },
        {
          name: "Check Box",
          component: CheckBox,
          inputToConfig: "",
        },
      ],
      radioButton: {
        name: "Radio Button",
        component: RadioButton,
        inputToConfig: "",
        elements: [],
        value: null,
      },
      formFields: [],
    }
  },
  computed: {
    output () {
      return this.formFields
        .map((f) => f.value)
        .filter((f) => f)
        .join("<br/>")
    },
  },
  methods: {
    addField (component) {
      if (!this.checkInputToConfig(component)) return
      const newComponent = {
        ...component,
        value: null,
      }
      this.formFields.push(newComponent)
      this.cleanInputFields()
    },
    addRadioButton () {
      if (!this.checkInputToConfig(this.radioButton)) return
      if (this.radioButton.elements.length === 0) {
        this.formFields.push(this.radioButton)
      }
      this.radioButton.elements.push(this.radioButton.inputToConfig)
      this.cleanInputFields()
    },
    cleanInputFields () {
      this.radioButton.inputToConfig = ""
      this.formTypes.find((e) => e.inputToConfig !== undefined).inputToConfig =
        ""
    },
    checkInputToConfig (component) {
      if (component.inputToConfig === "") {
        alert("You have to enter a name")
        return false
      }
      return true
    },
    removeInput (idx) {
      this.formFields.splice(idx, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
}
</style>
