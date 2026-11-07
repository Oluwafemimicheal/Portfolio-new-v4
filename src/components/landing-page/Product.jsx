import { Badge } from "../ui/badge"

const Product = () => {
  return (
    <section className="py-10 h-160">
      <div className="w-300 mx-auto h-full">
        <div className="flex  gap-5 h-full">
          <div className="grow flex flex-col justify-between h-full">
            <div className="grow space-y-2">
              <Badge variant="primary"><div className="w-2 h-2 rounded-full bg-accent-foreground"></div>Unique products flow</Badge>
              <h2 className="text-3xl font-bold">More Than Code. I Build Products That Perform.</h2>
            </div>
            <div>
              <p>I don't just write Frontend / Backend code. I create system logic and a unique path, that lead to a core value of the product. and bring out the improve in every single lines of code.</p>
            </div>
          </div>
          <div className="w-220 flex flex-col justify-between h-full border-x px-5 border-muted-foreground">
            <div className="grow space-y-20">
              <h4 className={"uppercase text-sm font-semibold"}>HR Attendant Dashboard System</h4>

              <div className="space-y-5">
                <h2 className="text-md font-semibold">Performance That Comes with Flow!</h2>
                <p className="text-sm text-muted-foreground">
                  I don't just write Frontend / Backend code. I create system logic and a unique path, that lead to a core value of the product. and bring out the improve in every single lines of code.
                </p>
              </div>
            </div>
            <div className="w-full h-60 border border-muted-foreground rounded-md shadow-lg">
              
            </div>
          </div>
          <div className="w-220 flex flex-col justify-between h-full">
            <div className="grow space-y-20">
              <h4 className={"uppercase text-sm font-semibold"}>Instructor Hub Platform</h4>

              <div className="space-y-5">
                <h2 className="text-md font-semibold">Experience of action called ease</h2>
                <p className="text-sm text-muted-foreground">
                  I don't just write Frontend / Backend code. I create system logic and a unique path, that lead to a core value of the product. and bring out the improve in every single lines of code.
                </p>
              </div>
            </div>
            <div className="w-full h-60 border border-muted-foreground rounded-md shadow-lg">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
