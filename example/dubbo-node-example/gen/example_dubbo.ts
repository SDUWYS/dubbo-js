// @generated by protoc-gen-dubbo-es v0.0.9 with parameter "target=ts"
// @generated from file example.proto (package apache.dubbo.demo.example.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SayRequest, SayResponse } from "./example_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service apache.dubbo.demo.example.v1.ExampleService
 */
export const ExampleService = {
  typeName: "apache.dubbo.demo.example.v1.ExampleService",
  methods: {
    /**
     * @generated from rpc apache.dubbo.demo.example.v1.ExampleService.Say
     */
    say: {
      name: "Say",
      I: SayRequest,
      O: SayResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

