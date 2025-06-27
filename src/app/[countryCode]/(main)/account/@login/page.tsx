import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

import { BRAND_NAME } from "@lib/brand-config"

export const metadata: Metadata = {
  title: `${BRAND_NAME} | Sign In`,
  description: `Sign in to your ${BRAND_NAME} account.`,
}

export default function Login() {
  return <LoginTemplate />
}
