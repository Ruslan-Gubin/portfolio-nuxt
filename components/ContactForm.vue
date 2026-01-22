<script setup lang="ts">
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import Alert from './Alert';

const config = useRuntimeConfig();

const name = ref('');
const email = ref('');
const message = ref('');

const alert = ref({ isShow: false, title: '', text: '', status: 'success' });
const isLoading = ref(false);

const activeShowAlert = (title: string, text: string, status: 'warn' | 'success' | 'error') => {
  alert.value.isShow = true;
  alert.value.title = title;
  alert.value.text = text;
  alert.value.status = status;

  setTimeout(() => {
    alert.value.isShow = false;
    alert.value.title = '';
    alert.value.text = '';
    alert.value.status = '';
    isLoading.value = false;
  }, 3000)
};

const onSubmit = (e) => {
  isLoading.value = true;

  emailjs.sendForm(config.public.EMAIL_SERVICE_ID, config.public.EMAIL_TEMPLATE_ID, e.target, {
    publicKey: config.public.EMAIL_PUBLIC_KEY,
  })
    .then(() => {
      activeShowAlert('Письмо успешно доставлено', 'Ваше письмо успешно отправлено. В скором времени мы свяжемся с вами.', 'success');

      name.value = ''
      email.value = ''
      message.value = ''
    },
      (error) => {
        console.error(error);
        activeShowAlert('Ошибка отправки', 'Не удалось отправить письмо, попробуйте позднее.', 'error');
      }
    )
}
</script>

<template>
  <Alert v-if.v-bind="alert.isShow" :title="alert.title" :status="alert.status">
    {{ alert.text }}
  </Alert>
  <aside class='aside'>
    <header class='header'>
      <h1 class='titleForm'>Почта</h1>
      <h2 class='subtitle'>Отправьте электронное письмо.</h2>
    </header>
    <form class='asideForm' @submit.prevent='onSubmit'>
      <label class='label'>
        Имя
        <input required v-model.trim='name' class='input' type='text' name='name' />
      </label>
      <label class='label'>
        Почта
        <input required v-model.trim='email' class='input' type='email' name='email' />
      </label>
      <label class='label'>
        Сообщение
        <textarea v-model.trim='message' class='textarea' name='message' />
      </label>
      <button :disabled="isLoading" type='submit' class='button'>Отправить</button>
    </form>
  </aside>
</template>

<style lang="css" scoped>
.aside {
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: var(--padding-content-block);
  max-height: max-content;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 680px;
  }
}

.header {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.titleForm {
  font-size: 32px;

  @media (max-width: 1024px) {
    font-size: 36px;
  }
}

.subtitle {
  color: #757575;
  max-width: 80%;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;

  @media (max-width: 500px) {
    max-width: 100%;
  }
}

.asideForm {
  display: flex;
  flex-direction: column;
  row-gap: var(--padding-content-block);
}

.label {
  font-weight: 300;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  font-size: 20px;

  @media (max-width: 500px) {
    font-size: 18px;
  }
}

.input {
  padding: 12px 16px;
  font-weight: 300;
  border-radius: 8px;
  border: 1px solid #949494;
  font-size: 18px;

  &:focus {
    border-color: #015fcc;
  }
}

.textarea {
  padding: 12px 16px;
  font-size: 18px;
  min-height: 110px;
  border: 1px solid #949494;
  border-radius: 8px;
  font-weight: 300;

  &:focus {
    border-color: #015fcc;
  }
}

.button {
  background-color: black;
  padding-inline: 27px;
  height: 47px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  max-width: max-content;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
}
</style>
