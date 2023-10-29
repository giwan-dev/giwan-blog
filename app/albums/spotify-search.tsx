"use client"

import { useState } from "react"
import { SpotifyAuth } from "./spotify-auth"
import { useSession } from "next-auth/react"
import Image from "next/image"

const SPOTIFY_API_URL_BASE = "https://api.spotify.com/v1"
const SPOTIFY_SEARCH_QUERY_INPUT_NAME = "spotify-search-query"

export function SpotifySearchSection() {
  const { data } = useSession()
  const [albums, setAlbums] = useState<
    { id: string; coverUrl: string | undefined; name: string }[]
  >([])

  const search = async (query: string) => {
    try {
      const url = new URL(`${SPOTIFY_API_URL_BASE}/search`)
      url.searchParams.append("q", query)
      url.searchParams.append("type", "album")
      url.searchParams.append("limit", "5")

      const accessToken = data?.accessToken
      const response = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      if (response.ok === false) {
        const error = new Error()
        error.name = "Spotify API Error"
        error.message = `[${response.status}] - GET ${url.toString()}`
        error.cause = response.statusText
        throw error
      }
      const json: {
        albums: {
          href: string
          limit: number
          next: string | null
          offset: number
          previous: string
          total: number
          items: {
            album_type: "album" | "single" | "compilation"
            total_tracks: number
            available_markets: string[] // ISO3166-1 alpha-2 contry code
            external_urls: {
              spotify: string // url
            }
            href: string
            id: string
            images: {
              url: string
              height: number
              width: number
            }[]
            name: string
            release_date: string
            release_date_precision: "year" | "month" | "day"
            restrictions: {
              reason: "market" | "product" | "explicit"
            }
            type: "album"
            uri: string // Spotify URI
            copyrights: {
              text: string
              type: "C" | "P"
            }[]
            external_ids: {
              isrc: string
              ean: string
              upc: string
            }
            genres: string[]
            label: string
            popularity: number // 0 ~ 100
            album_group: "album" | "single" | "compilation" | "appears_on"
            artists: {
              external_urls: {
                spotify: string
              }
              href: string
              id: string
              name: string
              type: "artist"
              uri: string // Spotify URI
            }[]
          }[]
        }
      } = await response.json()
      setAlbums(
        json.albums.items.map((album) => ({
          id: album.id,
          coverUrl: album.images[0]?.url,
          name: album.name,
        })),
      )
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="border rounded-lg border-gray-300 px-4 pt-2 pb-8 flex flex-col gap-y-3">
      <header className="h-12 flex justify-between items-center">
        <h2 className="text-xl font-bold">Spotify에서 검색</h2>

        <SpotifyAuth />
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const query = formData.get(SPOTIFY_SEARCH_QUERY_INPUT_NAME)
          if (query === null || query instanceof File || query === "") {
            return
          }

          search(query)
        }}
      >
        <input
          name={SPOTIFY_SEARCH_QUERY_INPUT_NAME}
          type="search"
          className="border rounded-sm px-1 py-0.5 text-lg"
          placeholder="앨범 검색..."
        />

        <button type="submit">검색</button>
      </form>

      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {album.coverUrl !== undefined && (
              <Image
                src={album.coverUrl}
                alt={`${album.name} 커버 이미지`}
                width={48}
                height={48}
              />
            )}

            {album.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
