import admin from "firebase-admin";

const serviceAccount = { "type": "service_account", "project_id": "digitaltwin-691fb", "private_key_id": "93afe07965ae842a79fa14323711388505b8c034", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQClQkYNUBWgPbmP\nmpVOb+QwL/Zk5/AWzC5QCapY0LVWjwTLouKMq8r3yhERXWX5/3YO2hVYgmeQhcm7\noyyxBXpmj46wNCfHQS7oJ4SuKwlt3aCczSdVR8Qaf7lkt4NUyyFceY7N4PeTgirz\nlUaODRdh5itXkqQ3TDwdg5gGs8W0xOPuczWY1+DwdwiOE1wdDB+p8X7+TIqg/tCx\nQR+D6SbrkCVbahr1OM9Bl0aQLmNeBWe/IOMmzFfz+5LEwjnjPEYFvPYud6rvvBkk\neFLdVzDTkOExWQ3/42SXJ9XbwwH6qI416h4TnrW66VY/0/+eYMTJfNXGcu3Czueh\nZ+ftvm4rAgMBAAECggEABRo8Pnn8CPQO8CumM4NJ6OD6OxhcNd/9CBScUVy0VKVa\n0QzI8O32+Nqg10fqd6MXGpNKOG7iUriGx4fcv+R66ILDNZaOqdzN3XYm5xfGFUHU\nDTNaZQwvtl++MilmYS5aa9gG/D1Xd5L7z4SK5qTp1Wh9axlIf7qXWpPvFDnlv1SO\nOkwRZyXpKyBP76StBPE41u7wRoB7RgLB2MBDFdv5rv/GKcPsssctj3McR05v7NgU\nWSZT0IvejUO0jfExcAaErWrmi1apo3chveLY4z2NhQu2N8aqyjGt/Q7T0BzRIB0N\na6ZESIWmh3rXRuD7i7saZTah7MsyOqCz/jTpOWdItQKBgQDZpX+DR95u1wQ6RXX1\nQSjlOSYq61dNRy/YeusekIAPHlr+TIiKS9TGB1jOyxcx8gNcGUyr5w4Y6RBjegDy\nON0zZY5BEo9Ri+A/Os1KPhqForhbxYwO91pZhHdZCCVrve5Aq3gPWcSr6f6ZOh99\nw434KvdmTEmwizI2VXWZtro+tQKBgQDCYXVIxthiuSyVO1EX9nz4QSByELYjSj5R\nyGHKSBqFzuvBFVJ7ooLs/7W9vgqzwim/E//+dd4df+k/JpqlMc9DuJb1mcMoOTCG\nmfQPgYOL7fRB7X3ajUB29XzzH9LRpOOa8QY2mrze2Sgg0EiZzVS2cHeAYEYU0YY4\nnT5ZTu0lXwKBgA+KyfhOAYxYvmyK2UmSRaFY22jlNW7HTpte67tbBkoOGOFgBcAa\nei9KBwV9a0Kdza+d/uOntFIDErCH3dluRh2NewMamDFyk6jwQgizNqGkZRXonX/U\nGheaZgttkX6IKaNkm0Y9WtYL96pphCYu+MxoBRLBD+ITjppir+syKUqhAoGAPh0C\na2UPFEzz0CQKP8wGFxZIlep9KT26OEv947OytftvHl3/434EtFLp8l3d8Z8j0+lC\nLj/f4DFViVZ+qDcIci10H7sov5u2w+xCLwpFzNsW6FJJmyLz7I95g/8xUMiN6p8G\nS0CbBeMCjanA6VTRsxKxPRaGjnR9nW2x1LwBz6UCgYAibpWPKOJHX4bw6WtVFX8s\nZ1OaZImBdR5zs0Cw1VnBIlQZGin3wtPD6EZ3e+hKWwe+qggD969iA6XMHliqBTtR\nhzx7EwWfSGtfDWyaS08VSwzpm8CoSMigZmWJq1h1Xxrxo/GktZBbaUrgzqQGcD5x\nJDNQnLxMVtvKHGGGa4eEeg==\n-----END PRIVATE KEY-----\n", "client_email": "firebase-adminsdk-gblcc@digitaltwin-691fb.iam.gserviceaccount.com", "client_id": "109304179907367887776", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gblcc%40digitaltwin-691fb.iam.gserviceaccount.com", "universe_domain": "googleapis.com" } ;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();

export {admin, db}