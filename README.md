# cron-express

`clone repo`
`npm i`
`touch .env`

You will need to sign up for a mailtrap account for test emails.
Sign up at mailtrap.io.  Navigate to your mailbox -> SMTP settings tab -> Integrations

Select nodemailer and add the user and password to your .env file

`.env`
```
MAILTRAP_EMAIL=[USER FROM MAILTRAP]
MAILTRAP_PASSWORD=[PASSWORD FROM MAILTRAP]
```

to run:
`node cron`
