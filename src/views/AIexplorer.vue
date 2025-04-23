<template>
  <v-container style="height: 90vh" class="d-flex flex-column justify-space-between">
    <v-row>
      <v-col cols="12">
        <!-- Messages Display in Individual Cards -->
        <div id="messages-container" ref="messagesContainer">
          <div v-for="(msg, index) in messages" :key="index" class="d-flex">
            <span class="mr-4 text-h6">{{ msg.role === 'system' ? '✨' : '🧠' }}</span>
            <v-card class="mb-4" :variant="msg.role === 'system' ? 'outlined' : 'flat'">
              <v-card-text>{{ msg.content }}</v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row v-if="messages.length === 0" class="justify-space-between flex-grow-0">
      <v-spacer />
      <v-card
        class="ma-4"
        variant="tonal"
        color="primary"
        @click="handleSubmitTemplatePrompt('Jack是誰')"
      >
        <v-card-text>Jack是誰</v-card-text>
      </v-card>
      <v-card
        class="ma-4"
        variant="tonal"
        color="primary"
        @click="handleSubmitTemplatePrompt('他擅長甚麼')"
      >
        <v-card-text>他擅長甚麼</v-card-text>
      </v-card>
      <v-card
        class="ma-4"
        variant="tonal"
        color="primary"
        @click="handleSubmitTemplatePrompt('有甚麼作品')"
      >
        <v-card-text>有甚麼作品</v-card-text>
      </v-card>
      <v-spacer />
    </v-row>

    <v-row class="flex-grow-0">
      <v-col cols="12">
        <v-textarea
          v-model="message"
          label="Enter your message"
          variant="outlined"
          single-line
          rows="2"
          no-resize
          @click:append="sendMessage"
          @keydown.enter.prevent="sendMessage"
        >
          <template #append>
            <v-btn
              :disabled="asyncState.isLoading"
              icon="mdi-send"
              variant="plain"
              @click="sendMessage"
            />
          </template>
        </v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { ref, watch, nextTick, reactive } from 'vue'

  interface Message {
    role: 'user' | 'system'
    content: string
  }

  const messagesContainer = ref<HTMLElement | null>(null)
  const message = ref('')
  const messages = ref<Message[]>([])
  const asyncState = reactive({ isLoading: false, error: null })

  async function fetchOpenAIResponse(userMessage: string) {
    const copyOfUserMessage = userMessage
    asyncState.isLoading = true
    const currentMessageIndex = messages.value.length
    messages.value.push({ role: 'system', content: '' })
    try {
      const conversationHistory = messages.value.slice(0, -2).map(msg => ({
        role: msg.role === 'system' ? 'assistant' : 'user',
        content: msg.content,
      }))

      const response = await fetch('https://my-ai-bio-worker.king840110.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: userMessage,
          conversationHistory: conversationHistory,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      if (data.status === 200 && data.answer) {
        messages.value[currentMessageIndex].content = data.answer
      } else {
        throw new Error('Invalid response format')
      }
    } catch (error) {
      message.value = copyOfUserMessage // Restore the user message
      console.error('Error fetching response:', error)
      messages.value[currentMessageIndex].content = '發生點錯誤'
    } finally {
      asyncState.isLoading = false
    }
  }

  async function sendMessage() {
    if (asyncState.isLoading) return
    if (message.value.trim()) {
      // Append user message to the chat history
      messages.value.push({ role: 'user', content: message.value })
      const userInput = message.value // Save the user input before clearing the message
      message.value = ''

      // Fetch LLM response and append it to the chat history
      await fetchOpenAIResponse(userInput)
    }
  }

  const handleSubmitTemplatePrompt = (template: string) => {
    message.value = template
    sendMessage()
  }

  watch(
    messages,
    () => {
      //scroll to the bottom of the messages container
      nextTick(() => {
        if (messagesContainer.value) {
          messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
        }
      })
    },
    { deep: true }
  )
</script>

<style>
  #messages-container {
    max-height: 70vh;
    overflow-y: auto;
  }
</style>
