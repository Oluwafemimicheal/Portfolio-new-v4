import { Badge } from "../ui/badge"

const Product = () => {
  return (
    <section className="py-10 h-auto lg:h-160" id="project">
      <div className="px-5 lg:px-0 lg:w-300 mx-auto h-full">
        <div className="flex lg:flex-row flex-col  gap-5 h-full">
          <div className="grow flex flex-col justify-between h-full">
            <div className="grow space-y-2">
              <Badge variant="primary"><div className="w-2 h-2 rounded-full bg-accent-foreground"></div>Unique products flow</Badge>
              <h2 className="text-lg lg:text-3xl font-bold">More Than Code. I Build Products That Perform.</h2>
            </div>
            <div>
              <p className="lg:text-lg text-sm text-muted-foreground">I don't just write Frontend / Backend code. I create system logic and a unique path, that lead to a core value of the product. and bring out the improve in every single lines of code.</p>
            </div>
          </div>
          <div className="lg:bg-transparent bg-muted-foreground/10 rounded-md lg:w-220 flex flex-col gap-10 lg:gap-0 justify-between h-full lg:border-x px-5 py-5 border-muted-foreground">
            <div className="grow lg:space-y-20">
              <h4 className={"uppercase text-sm font-semibold"}>HR Attendant Dashboard System</h4>

              <div className="space-y-5">
                <h2 className="text-md font-semibold">Performance That Comes with Flow!</h2>
                <p className="text-sm text-muted-foreground">
                  I don't just write Frontend / Backend code. I create system logic and a unique path, that lead to a core value of the product. and bring out the improve in every single lines of code.
                </p>
              </div>
            </div>
            <div className="w-full lg:h-60 h-40 border border-muted-foreground rounded-md shadow-lg">
              
            </div>
          </div>
          <div className="lg:bg-transparent bg-muted-foreground/10 rounded-md lg:w-220 flex flex-col gap-10 lg:gap-0 justify-between h-full lg:border-x px-5 py-5 border-muted-foreground">
            <div className="grow lg:space-y-20">
              <h4 className={"uppercase text-sm font-semibold"}>Instructor Hub Platform</h4>

              <div className="space-y-5">
                <h2 className="text-md font-semibold">Experience of action called ease</h2>
                <p className="text-sm text-muted-foreground">
                  I don't just write Frontend / Backend code. I create system logic and a unique path, that lead to a core value of the product. and bring out the improve in every single lines of code.
                </p>
              </div>
            </div>
            <div className="w-full lg:h-60 h-40 border border-muted-foreground rounded-md shadow-lg">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
