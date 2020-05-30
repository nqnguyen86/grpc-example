package main

import (
	"context"
	"fmt"
	"log"

	"gitlab.com/grpc-example/greet-callee-go/greetpb"
	"google.golang.org/grpc"
)

func main() {
	fmt.Println("This is client")
	cc, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Could not connect: %v", err)
	}
	defer cc.Close()
	c := greetpb.NewGreetServiceClient(cc)

	doUnary(c)
}

func doUnary(c greetpb.GreetServiceClient) {
	fmt.Println("Starting do Unary RPC ")
	req := &greetpb.GreetRequest{
		Greeting: &greetpb.Greeting{
			FirstName: "Nguyen",
			LastName:  "Quang",
		},
	}
	res, err := c.Greet(context.Background(), req)
	if err != nil {
		log.Fatalf("Error when call Greeting %v", err)
	}
	log.Printf("Response from Greet: %v \n", res.Result)
}
