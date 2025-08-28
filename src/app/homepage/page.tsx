"use client";
import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";

export default function BlogPage() {
  const router = useRouter();

  return (
    <Layout>
    {/* <div className="min-h-screen bg-base-200">
      Navbar
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            🌍 Pollution Blog
          </Link>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>
      </div> */}

      {/* Hero Section */}
      <div className="hero bg-base-200 py-10">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Understanding Pollution</h1>
            <p className="py-6">
              Stay informed about environmental issues, sustainable practices,
              and global efforts to reduce pollution.
            </p>
            <Link href="#posts" className="btn btn-primary">Read Articles</Link>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div id="posts" className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Example Post Card */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://pollutionbucket123.s3.us-east-1.amazonaws.com/air_pollution.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVO6XH53ZVCBLATLV%2F20250828%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250828T160930Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJGMEQCIGpjl31EOq0807a0GE0zwVzyZ0VS5499Vd27kBBsWBMfAiAAvm2NM2CKoWCCECJJdDuLr9ylH8Diwj9WrY0cVFKjfyqDAwip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NTcyNDE3NTA5MSIMRe4jbr7RIWqbugbPKtcChsrXFCu4KTwY55%2BY9LuRh5m8Kc7WMzgMlTZA3wdYuDHeQIkwljEIVkMurGVmmgm86yKOkldOZ3C%2F7wXwAh1MFKDOtSElDweiT4Fa3x2gMl6PjtbkvLzESjX6eIeJ%2FzKlWTCLgQhrf2WFqsfvbMK5JgpCRVuFIipveaG0qO1sIn89XwAFgSOfdnDzF302Ropyr%2BFK8hRGGmYJH1Rt0nKHoiCr1vPAjPRqpRxzJkXen9stS7vEA5ONEeYzXnDpUP7i0S7eLVxWQ5oPLw%2Fv0QcpE00GxJOxyxWZTK4fo%2F4IShobzgEDYlfjNbw5qmbvteUHXVnnU8mvLq2bhlaGSSP%2FzcyBZoe7Q6NP%2FDDxe9augP5vTp03Y42bhZq%2BH8ZepU856%2FlT4seIuwwHejB%2F2IaFK0ZCxL%2FVmsfIu%2FVWQkOBY1mLaf3L3MlSdY27Bz92UpVw37h8vDrhBzDg7L%2FFBjqIAqLu1uePhk1DwhWYQ21n2RNDZVtjuBdV2Los3VD8S1mXUa9nm3sRzhxZHj0Id42pHcU%2FkoHulzISS3T9OVpJmxivoACQJ3O8vqmh%2Bfg9PTkvMWkZQI%2Fy3Ceif3Cd%2B5XuFBaAG3zhwAVwsHKE0%2FNTWkaxHhRMfKJy5a3pxRvsTzig1E%2FO7WavgG21WVhJjLfDH7YPpSx1YCFE1Fv6opq7p5vvQX7HmcXqGcd%2Bx6Kgodx91XUC8Pm7J4k4KBAnGcE8UrokGUkrbknEDxgoybkB4PobeYRf2otPmj%2BzN4S8DTEaVElhkUEJx%2Bi0SRQZyne4yck2GkbxDMgk22pwvpYHmSDbjog8v0pylg%3D%3D&X-Amz-Signature=0bb83999e35dc6366597fe747b2b6ed43d88e86e31d6126567169f88fee8a80f&X-Amz-SignedHeaders=host&response-content-disposition=inline"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Air Pollution</h2>
            <p>
              Learn how air pollution impacts health and what we can do to
              reduce it.
            </p>
            <div className="card-actions justify-end">
              <Link href="/air-pollution" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://pollutionbucket123.s3.us-east-1.amazonaws.com/guide_waterpollution_66615937_2400.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVO6XH53ZVCBLATLV%2F20250828%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250828T161125Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJGMEQCIGpjl31EOq0807a0GE0zwVzyZ0VS5499Vd27kBBsWBMfAiAAvm2NM2CKoWCCECJJdDuLr9ylH8Diwj9WrY0cVFKjfyqDAwip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NTcyNDE3NTA5MSIMRe4jbr7RIWqbugbPKtcChsrXFCu4KTwY55%2BY9LuRh5m8Kc7WMzgMlTZA3wdYuDHeQIkwljEIVkMurGVmmgm86yKOkldOZ3C%2F7wXwAh1MFKDOtSElDweiT4Fa3x2gMl6PjtbkvLzESjX6eIeJ%2FzKlWTCLgQhrf2WFqsfvbMK5JgpCRVuFIipveaG0qO1sIn89XwAFgSOfdnDzF302Ropyr%2BFK8hRGGmYJH1Rt0nKHoiCr1vPAjPRqpRxzJkXen9stS7vEA5ONEeYzXnDpUP7i0S7eLVxWQ5oPLw%2Fv0QcpE00GxJOxyxWZTK4fo%2F4IShobzgEDYlfjNbw5qmbvteUHXVnnU8mvLq2bhlaGSSP%2FzcyBZoe7Q6NP%2FDDxe9augP5vTp03Y42bhZq%2BH8ZepU856%2FlT4seIuwwHejB%2F2IaFK0ZCxL%2FVmsfIu%2FVWQkOBY1mLaf3L3MlSdY27Bz92UpVw37h8vDrhBzDg7L%2FFBjqIAqLu1uePhk1DwhWYQ21n2RNDZVtjuBdV2Los3VD8S1mXUa9nm3sRzhxZHj0Id42pHcU%2FkoHulzISS3T9OVpJmxivoACQJ3O8vqmh%2Bfg9PTkvMWkZQI%2Fy3Ceif3Cd%2B5XuFBaAG3zhwAVwsHKE0%2FNTWkaxHhRMfKJy5a3pxRvsTzig1E%2FO7WavgG21WVhJjLfDH7YPpSx1YCFE1Fv6opq7p5vvQX7HmcXqGcd%2Bx6Kgodx91XUC8Pm7J4k4KBAnGcE8UrokGUkrbknEDxgoybkB4PobeYRf2otPmj%2BzN4S8DTEaVElhkUEJx%2Bi0SRQZyne4yck2GkbxDMgk22pwvpYHmSDbjog8v0pylg%3D%3D&X-Amz-Signature=9cdfdc4e9e36dd3cd306d4e7db49d45622d3d1d37460f313edefe80e498f09bb&X-Amz-SignedHeaders=host&response-content-disposition=inline" alt="Water Pollution"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Water Pollution</h2>
            <p>
              Explore the causes of water contamination and its global effects.
            </p>
            <div className="card-actions justify-end">
              <Link href="/water-pollution" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://pollutionbucket123.s3.us-east-1.amazonaws.com/deforestation.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVO6XH53ZVCBLATLV%2F20250828%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250828T161010Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLWVhc3QtMSJGMEQCIGpjl31EOq0807a0GE0zwVzyZ0VS5499Vd27kBBsWBMfAiAAvm2NM2CKoWCCECJJdDuLr9ylH8Diwj9WrY0cVFKjfyqDAwip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM3NTcyNDE3NTA5MSIMRe4jbr7RIWqbugbPKtcChsrXFCu4KTwY55%2BY9LuRh5m8Kc7WMzgMlTZA3wdYuDHeQIkwljEIVkMurGVmmgm86yKOkldOZ3C%2F7wXwAh1MFKDOtSElDweiT4Fa3x2gMl6PjtbkvLzESjX6eIeJ%2FzKlWTCLgQhrf2WFqsfvbMK5JgpCRVuFIipveaG0qO1sIn89XwAFgSOfdnDzF302Ropyr%2BFK8hRGGmYJH1Rt0nKHoiCr1vPAjPRqpRxzJkXen9stS7vEA5ONEeYzXnDpUP7i0S7eLVxWQ5oPLw%2Fv0QcpE00GxJOxyxWZTK4fo%2F4IShobzgEDYlfjNbw5qmbvteUHXVnnU8mvLq2bhlaGSSP%2FzcyBZoe7Q6NP%2FDDxe9augP5vTp03Y42bhZq%2BH8ZepU856%2FlT4seIuwwHejB%2F2IaFK0ZCxL%2FVmsfIu%2FVWQkOBY1mLaf3L3MlSdY27Bz92UpVw37h8vDrhBzDg7L%2FFBjqIAqLu1uePhk1DwhWYQ21n2RNDZVtjuBdV2Los3VD8S1mXUa9nm3sRzhxZHj0Id42pHcU%2FkoHulzISS3T9OVpJmxivoACQJ3O8vqmh%2Bfg9PTkvMWkZQI%2Fy3Ceif3Cd%2B5XuFBaAG3zhwAVwsHKE0%2FNTWkaxHhRMfKJy5a3pxRvsTzig1E%2FO7WavgG21WVhJjLfDH7YPpSx1YCFE1Fv6opq7p5vvQX7HmcXqGcd%2Bx6Kgodx91XUC8Pm7J4k4KBAnGcE8UrokGUkrbknEDxgoybkB4PobeYRf2otPmj%2BzN4S8DTEaVElhkUEJx%2Bi0SRQZyne4yck2GkbxDMgk22pwvpYHmSDbjog8v0pylg%3D%3D&X-Amz-Signature=ac81686cea3d31b203272edbd7d768b97c31b4266997fe13941bbeabeb5195f8&X-Amz-SignedHeaders=host&response-content-disposition=inline" alt="Deforestation"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Deforestation</h2>
            <p>
              Understand how deforestation contributes to climate change and
              pollution.
            </p>
            <div className="card-actions justify-end">
              <Link href="/deforestation" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer
      <footer className="footer footer-center p-6 bg-base-300 text-base-content mt-10">
        <aside>
          <p>© {new Date().getFullYear()} Pollution Blog. All rights reserved.</p>
        </aside>
      </footer>
    </div> */}
    </Layout>
  );
}
