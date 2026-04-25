import "server-only";
import { cert, getApp, getApps, initializeApp, applicationDefault, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";
import { readFileSync } from "node:fs";

const APP_NAME = "ref-admin";

function createApp(): App {
  const projectId =
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ??
    process.env.FIREBASE_PROJECT_ID ??
    undefined;

  const saPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

  if (saPath && saPath.trim().length > 0) {
    const json = JSON.parse(readFileSync(saPath, "utf8"));
    return initializeApp(
      {
        credential: cert({
          projectId: json.project_id,
          clientEmail: json.client_email,
          privateKey: json.private_key,
        }),
        projectId: projectId ?? json.project_id,
      },
      APP_NAME
    );
  }

  return initializeApp(
    {
      credential: applicationDefault(),
      projectId,
    },
    APP_NAME
  );
}

export function getAdminApp(): App {
  return getApps().find((a) => a.name === APP_NAME) ?? createApp();
}

export function getAdminDb(): Firestore {
  return getFirestore(getAdminApp());
}
