import IContent from 'utils/interface';

export const thing46: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<blockquote>
        <p dir="auto">
          <em>"Man's got to know his limitations." — Dirty Harry</em>
        </p>
      </blockquote>
      <p dir="auto">
        Your resources are limited. You only have so much time and money to do
        your work, including the time and money needed to keep your knowledge,
        skills, and tools up-to-date. You can only work so hard, so fast, so
        smart, and so long. Your tools are only so powerful. Your target
        machines are only so powerful. So you have to respect the limits of your
        resources.
      </p>
      <p dir="auto">
        How to respect those limits? Know yourself, know your people, know your
        budgets, and know your stuff. Especially, as a software engineer, know
        the space and time complexity of your data structures and algorithms,
        and the architecture and performance characteristics of your systems.
        Your job is to create an optimal marriage of software and systems.
      </p>
      <p dir="auto">
        Space and time complexity are given as the function <em>O(f(n))</em> 
        which for n equal the size of the input is the asymptotic space or time
        required as n grows to infinity. Important complexity classes for 
        <em>f(n)</em> include <em>ln(n)</em>, <em>n</em>, <em>n ln(n)</em>, 
        <em>
          n<sup>e</sup>
        </em>
        , and 
        <em>
          e<sup>n</sup>
        </em>
        . As graphing these functions clearly shows, as <em>n</em> gets bigger 
        <em>O(ln(n))</em> is ever so much smaller than <em>O(n)</em> and 
        <em>O(n ln(n))</em>, which are ever so much smaller than 
        <em>
          O(n<sup>e</sup>)
        </em> 
        and 
        <em>
          O(e<sup>n</sup>)
        </em>
        . As Sean Parent puts it, for achievable n all complexity classes amount
        to near-constant, near-linear, or near-infinite.
      </p>

      <table className="table table-bordered w-50">
        <thead>
          <tr>
            <th></th>
            <th align="right">access time</th>
            <th align="right">capacity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>register</td>
            <td align="right">&lt; 1 ns</td>
            <td align="right">64b</td>
          </tr>
          <tr>
            <td>cache line</td>
            <td align="right"></td>
            <td align="right">64B</td>
          </tr>
          <tr>
            <td>L1 cache</td>
            <td align="right">1 ns</td>
            <td align="right">64 KB</td>
          </tr>
          <tr>
            <td>L2 cache</td>
            <td align="right">4 ns</td>
            <td align="right">8 MB</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td align="right">20 ns</td>
            <td align="right">32 GB</td>
          </tr>
          <tr>
            <td>disk</td>
            <td align="right">10 ms</td>
            <td align="right">10 TB</td>
          </tr>
          <tr>
            <td>LAN</td>
            <td align="right">20 ms</td>
            <td align="right">&gt; 1 PB</td>
          </tr>
          <tr>
            <td>internet</td>
            <td align="right">100 ms</td>
            <td align="right">&gt; 1 ZB</td>
          </tr>
        </tbody>
      </table>
      <p dir="auto">
        Complexity analysis is in terms of an abstract machine, but software
        runs on real machines. Modern computer systems are organized as
        hierarchies of physical and virtual machines, including language
        runtimes, operating systems, CPUs, cache memory, random-access memory,
        disk drives, and networks. The first table shows the limits on random
        access time and storage capacity for a typical networked server.
      </p>
      <p dir="auto">
        Note that capacity and speed vary by several orders of magnitude.
        Caching and lookahead are used heavily at every level of our systems to
        hide this variation, but they only work when access is predictable. When
        cache misses are frequent the system will be thrashing. For example, to
        randomly inspect every byte on a hard drive could take 32 years. Even to
        randomly inspect every byte in RAM could take 11 minutes. Random access
        is not predictable. What is? That depends on the system, but
        re-accessing recently used items and accessing items sequentially are
        usually a win.
      </p>
      <p dir="auto">
        Algorithms and data structures vary in how effectively they use caches.
        For instance:
      </p>
      <ul dir="auto">
        <li>
          Linear search makes good use of lookahead, but requires <em>O(n)</em> 
          comparisons.
        </li>
        <li>
          Binary search of a sorted array requires only <em>O(log(n))</em> 
          comparisons.
        </li>
        <li>
          Search of a van Emde Boas tree is <em>O(log(n))</em> and
          cache-oblivious.
        </li>
      </ul>
      <table className="table table-bordered w-50">
        <thead>
          <tr>
            <th align="left">Elements</th>
            <th align="right">Search time (ns)</th>
            <th align="right"></th>
            <th align="right"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="left"></td>
            <td align="right">
              <strong>linear</strong>
            </td>
            <td align="right">
              <strong>binary</strong>
            </td>
            <td align="right">
              <strong>vEB</strong>
            </td>
          </tr>
          <tr>
            <td align="left">8</td>
            <td align="right">50</td>
            <td align="right">90</td>
            <td align="right">40</td>
          </tr>
          <tr>
            <td align="left">64</td>
            <td align="right">180</td>
            <td align="right">150</td>
            <td align="right">70</td>
          </tr>
          <tr>
            <td align="left">512</td>
            <td align="right">1200</td>
            <td align="right">230</td>
            <td align="right">100</td>
          </tr>
          <tr>
            <td align="left">4096</td>
            <td align="right">17000</td>
            <td align="right">320</td>
            <td align="right">160</td>
          </tr>
        </tbody>
      </table>
      <p dir="auto">
        How to choose? In the last analysis, by measuring. The second table
        shows the time required to search arrays of 64-bit integers via these
        three methods. On my computer:
      </p>
      <ul dir="auto">
        <li>
          Linear search is competitive for small arrays, but loses exponentially
          for larger arrays.
        </li>
        <li>
          van Emde Boas wins hands down, thanks to its predictable access
          pattern.
        </li>
      </ul>
      <blockquote>
        <p dir="auto">
          <em>
            "You pays your money and you takes your choice." — 
            <a
              href="http://www.nytimes.com/1988/02/28/magazine/on-language-you-pays-yer-money.html?pagewanted=all"
              rel="nofollow"
            >
              Punch
            </a>
          </em>
        </p>
      </blockquote>`,
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
