#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { EdaAppStack } from "../lib/eda-app-stack";

const app = new cdk.App();

new EdaAppStack(app, "EDAStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
