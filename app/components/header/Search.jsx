
import { Form } from "@remix-run/react";



export default function search(){
    return (
        <Form method="get" action="/search">
          <input
            type="search"
            name="q"
            placeholder={('search')}
            className="rounded-full text-center w-60 mx-2"
            />
        </Form>
      );
    }
    // defaultValue={initialQuery}