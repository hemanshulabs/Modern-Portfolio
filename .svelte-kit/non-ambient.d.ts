
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/experience" | "/api/img" | "/api/myself" | "/api/services" | "/api/uploadthing" | "/api/user" | "/api/work" | "/studio" | "/studio/[...catchall]";
		RouteParams(): {
			"/studio/[...catchall]": { catchall: string }
		};
		LayoutParams(): {
			"/": { catchall?: string };
			"/api": Record<string, never>;
			"/api/experience": Record<string, never>;
			"/api/img": Record<string, never>;
			"/api/myself": Record<string, never>;
			"/api/services": Record<string, never>;
			"/api/uploadthing": Record<string, never>;
			"/api/user": Record<string, never>;
			"/api/work": Record<string, never>;
			"/studio": { catchall?: string };
			"/studio/[...catchall]": { catchall: string }
		};
		Pathname(): "/" | "/api" | "/api/" | "/api/experience" | "/api/experience/" | "/api/img" | "/api/img/" | "/api/myself" | "/api/myself/" | "/api/services" | "/api/services/" | "/api/uploadthing" | "/api/uploadthing/" | "/api/user" | "/api/user/" | "/api/work" | "/api/work/" | "/studio" | "/studio/" | `/studio/${string}` & {} | `/studio/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/assets/imgs/footer-logo.svg" | "/assets/imgs/home-back.jpg" | "/assets/imgs/img1.jpg" | "/assets/imgs/logo.svg" | "/assets/imgs/p.jpeg" | "/assets/imgs/patil-high-resolution-logo-white-transparent (1).svg" | "/assets/imgs/patil.svg" | "/assets/imgs/profile-photo.jpg" | "/assets/imgs/profile.png" | "/assets/imgs/scroll_arrow.png" | "/assets/imgs/signature-white.png" | "/assets/imgs/svg-icons/android.svg" | "/assets/imgs/svg-icons/firebase.svg" | "/assets/imgs/svg-icons/flutter.svg" | "/assets/imgs/svg-icons/gcp.svg" | "/assets/imgs/svg-icons/iOS.svg" | "/assets/imgs/svg-icons/nodejs.svg" | "/assets/imgs/svg-icons/php.svg" | "/assets/imgs/svg-icons/react.svg" | "/assets/imgs/svg-icons/svelte.svg" | "/assets/imgs/svg-icons/trace.svg" | "/assets/imgs/Untitled.png" | "/assets/imgs/work-back/grillzzy/cover.jpg" | "/assets/imgs/work-back/kic/cover.jpg" | "/assets/imgs/work-back/kwa/cover.jpg" | "/assets/imgs/work-back/lcml/cover.jpg" | "/assets/imgs/work-back/lcml/image.png" | "/assets/imgs/work-back/slickscroll/cover.jpg" | "/assets/imgs/work-back/v1/cover.jpg" | "/data/data.json" | "/data/work-data.json" | "/favicon.ico" | "/robots.txt" | "/sitemap.xml" | string & {};
	}
}