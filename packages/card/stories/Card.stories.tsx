// Modules Import
import React from "react"

// Application Import
import { Card } from "../src"

export default {
  title: "Card",
}

export const SimpleCard = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full grid grid-flow-row grid-cols-4 gap-10">
        <Card className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
      </div>
    </div>
  )
}

export const HeaderCard = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full grid grid-flow-row grid-cols-4 gap-10">
        <Card header="Main Header" className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card header="Main Header" className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card header="Main Header" className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card header="Main Header" className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card header="Main Header" className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card header="Main Header" className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card header="Main Header" className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
        <Card header="Main Header" className="w-full" style={{ height: "10rem" }}>
          Normal Card
        </Card>
      </div>
    </div>
  )
}
