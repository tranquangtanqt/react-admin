import IContent from 'utils/interface';

export const thing59: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p dir="auto">
        Polymorphism is one of the grand ideas that is fundamental to OO. The
        word, taken from Greek, means many (<em>poly</em>) forms (<em>morph</em>
        ). In the context of programming polymorphism refers to many forms of a
        particular class of objects or method. But polymorphism isn't simply
        about alternate implementations. Used carefully, polymorphism creates
        tiny localized execution contexts that let us work without the need for
        verbose <em>if-then-else</em> blocks. Being in a context allows us to do
        the right thing directly, whereas being outside of that context forces
        us to reconstruct it so that we can then do the right thing. With
        careful use of alternate implementations, we can capture context that
        can help us produce less code that is more readable. This is best
        demonstrated with some code, such as the following (unrealistically)
        simple shopping cart:
      </p>`,
      },
      {
        code: {
          src: `public class ShoppingCart {
    private ArrayList<Item> cart = new ArrayList<Item>();
    public void add(Item item) { cart.add(item); }
    public Item takeNext() { return cart.remove(0);  }
    public boolean isEmpty() { return cart.isEmpty(); }
}`,
          language: 'java',
        },
      },
      {
        div: `<p dir="auto">
        Let's say our webshop offers items that can be downloaded and items that
        need to be shipped. Let's build another object that supports these
        operations:
      </p>`,
      },
      {
        code: {
          src: `public class Shipping {
    public boolean ship(Item item, SurfaceAddress address) { ... }
    public boolean ship(Item item, EMailAddress address) { ... }
}`,
          language: 'java',
        },
      },
      {
        div: `<p dir="auto">
        When a client has completed checkout we need to ship the goods:
      </p>`,
      },
      {
        code: {
          src: `while (!cart.isEmpty()) {
    shipping.ship(cart.takeNext(), ???);
}`,
          language: 'java',
        },
      },
      {
        div: `<p dir="auto">
        The <em>???</em> parameter isn't some new fancy elvis operator, it's
        asking should I email or snail-mail the item? The context needed to
        answer this question no longer exists. We have could captured the method
        of shipment in a boolean or enum and then use an <em>if-then-else</em> 
        to fill in the missing parameter. Another solution would be create two
        classes that both extend Item. Let's call these DownloadableItem and
        SurfaceItem. Now let's write some code. I'll promote Item to be an
        interface that supports a single method, ship. To ship the contents of
        the cart, we will call <code>item.ship(shipper)</code>. Classes 
        <code>DownloadableItem</code> and <code>SurfaceItem</code> will both
        implement ship.
      </p>`,
      },
      {
        code: {
          src: `public class DownloadableItem implements Item {
    public boolean ship(Shipping shipper) {
        shipper.ship(this, customer.getEmailAddress());
    }
}

public class SurfaceItem implements Item {
    public boolean ship(Shipping shipper) {
        shipper.ship(this, customer.getSurfaceAddress());
    }
}`,
          language: 'java',
        },
      },
      {
        div: `<p dir="auto">
        In this example we've delegated the responsibility of working with 
        <code>Shipping</code> to each Item. Since each item knows hows it's best
        shipped, this arrangement allows us to get on with it without the need
        for an <em>if-then-else</em>. The code also demonstrates a use of two
        patterns that often play well together: Command and Double Dispatch.
        Effective use of these patterns relies on careful use of polymorphism.
        When that happens there will be a reduction in the number of 
        <em>if-then-else</em> blocks in our code.
      </p>
      <p dir="auto">
        While there are cases where it's much more practical to use 
        <em>if-then-else</em> instead of polymorphism, it is more often the case
        that a more polymorphic coding style will yield a smaller, more readable
        and less fragile code base. The number of missed opportunities is a
        simple count of the <em>if-then-else</em> statements in our code.
      </p>`,
      },
    ],
  },
  {
    title: 'Tham khảo',
    contents: [
      {
        p: `Nguồn: https://github.com/97-things/97-things-every-programmer-should-know`,
      },
    ],
  },
];
