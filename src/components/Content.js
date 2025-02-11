import Slider from "./Slider";

const Content = () => {
  return (
    <>
      <div class="container my-3">
        <div class="row">
          <div class="col-md-9 pe-md-2">
            <div class=" mb-3 ">
              <div class="col-12">
                <form
                  method="post"
                  action="https://app-portal.foxart.co/search"
                  class="d-flex shadow-sm p-2 bg-white rounded"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="BtU1A17iQUBxTU9r3QqKBOqNImuXha6aUavBs1je"
                  />
                  <input
                    class="form-control search-form me-2 ps-1"
                    id="search-form"
                    name="term"
                    type="search"
                    placeholder="Search Apps"
                    aria-label="Search Apps"
                  />
                  <button
                    class="btn search-btn"
                    type="submit"
                    aria-label="Search"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            <Slider />

            <h1 class="h1-title mb-3">Latest and Free Apps</h1>

            <div class="shadow-sm p-2 bg-white rounded mb-3 pb-0">
              <div class="m-1">
                <a
                  href="https://app-portal.foxart.co/new-apps"
                  class="more float-end"
                >
                  More »
                </a>
                <h2 class="section-title">New Apps</h2>
                <div class="row app-list">
                  <div class="col-4 mb-3">
                    <a href="https://app-portal.foxart.co/apps/jet-attack-move">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/16988308698886290.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Jet Attack Move"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Jet Attack Move</span>
                          <span class="developer my-md-1 my-0">
                            Arcade Air Combat
                          </span>
                          <span class="date">Nov 01, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 mb-3">
                    <a href="https://app-portal.foxart.co/apps/c-ram-ciws-simulator">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/16988308441140909.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="C-RAM CIWS simulator"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">C-RAM CIWS simulator</span>
                          <span class="developer my-md-1 my-0">
                            Anti Air Gun, Air Defense Game
                          </span>
                          <span class="date">Nov 01, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 mb-3">
                    <a href="https://app-portal.foxart.co/apps/road-to-valor-empires">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/16979438817332727.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Road to Valor: Empires"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Road to Valor: Empires</span>
                          <span class="developer my-md-1 my-0">
                            Dreamotion Inc.
                          </span>
                          <span class="date">Oct 22, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 mb-3">
                    <a href="https://app-portal.foxart.co/apps/conflict-of-nations-ww3-game">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1697915044.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Conflict of Nations: WW3 Game"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Conflict of Nations: WW3 Game
                          </span>
                          <span class="developer my-md-1 my-0">
                            Dorado Games / DOG Productions Ltd
                          </span>
                          <span class="date">Oct 21, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 mb-3">
                    <a href="https://app-portal.foxart.co/apps/war-thunder-mobile">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1697481299.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="War Thunder Mobile"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">War Thunder Mobile</span>
                          <span class="developer my-md-1 my-0">
                            Tanks, ships and aircraft
                          </span>
                          <span class="date">Oct 16, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 mb-3">
                    <a href="https://app-portal.foxart.co/apps/itop-vpn">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1697065434.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="iTop Vpn"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">iTop Vpn</span>
                          <span class="developer my-md-1 my-0">techway</span>
                          <span class="date">Oct 11, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 mb-3">
                    <a href="https://app-portal.foxart.co/apps/kaspersky-fast-secure-vpn">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1697065415.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Kaspersky Fast Secure VPN"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Kaspersky Fast Secure VPN</span>
                          <span class="developer my-md-1 my-0">
                            Kaspersky ME
                          </span>
                          <span class="date">Oct 11, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 mb-3">
                    <a href="https://app-portal.foxart.co/apps/kaspersky-vpn-antivirus">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1697065407.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Kaspersky: VPN &amp; Antivirus"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Kaspersky: VPN &amp; Antivirus
                          </span>
                          <span class="developer my-md-1 my-0">
                            Kaspersky ME
                          </span>
                          <span class="date">Oct 11, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 mb-3">
                    <a href="https://app-portal.foxart.co/apps/turbo-vpn-secure-vpn-proxy">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1697065395.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Turbo VPN - Secure VPN Proxy"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Turbo VPN - Secure VPN Proxy
                          </span>
                          <span class="developer my-md-1 my-0">
                            Innovative Connecting
                          </span>
                          <span class="date">Oct 11, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 mb-3">
                    <a href="https://app-portal.foxart.co/apps/whatsapp-messenger">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1696615620.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="WhatsApp Messenger"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">WhatsApp Messenger</span>
                          <span class="developer my-md-1 my-0">
                            WhatsApp LLC
                          </span>
                          <span class="date">Oct 06, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 mb-3">
                    <a href="https://app-portal.foxart.co/apps/tunnelbear-vpn">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1696528303.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="TunnelBear VPN"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">TunnelBear VPN</span>
                          <span class="developer my-md-1 my-0">
                            TunnelBear, LLC
                          </span>
                          <span class="date">Sep 30, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 mb-3">
                    <a href="https://app-portal.foxart.co/apps/expressvpn-vpn-fast-secure">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1696100602.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="ExpressVPN: VPN Fast &amp; Secure"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            ExpressVPN: VPN Fast &amp; Secure
                          </span>
                          <span class="developer my-md-1 my-0">ExpressVPN</span>
                          <span class="date">Sep 30, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="shadow-sm p-2 bg-white rounded mb-3">
              <div class="m-1">
                <a
                  href="https://app-portal.foxart.co/featured-apps"
                  class="more float-end"
                >
                  More »
                </a>
                <h2 class="section-title">Featured Apps</h2>
                <div class="row app-list featured">
                  <div class="col-4 col-md-1-5  mb-md-0 mb-2">
                    <a href="https://app-portal.foxart.co/apps/grim-soul-dark-survival-rpg">
                      <img
                        src="https://app-portal.foxart.co/images/1696098827.webp"
                        class="lazy img-fluid rounded"
                        width="200"
                        height="200"
                        alt="Grim Soul: Dark Survival RPG"
                      />
                      <span class="title mt-1">
                        Grim Soul: Dark Survival RPG
                      </span>
                    </a>
                  </div>
                  <div class="col-4 col-md-1-5  mb-md-0 mb-2">
                    <a href="https://app-portal.foxart.co/apps/craft-of-survival-gladiators">
                      <img
                        src="https://app-portal.foxart.co/images/1696098539.webp"
                        class="lazy img-fluid rounded"
                        width="200"
                        height="200"
                        alt="Craft of Survival - Gladiators"
                      />
                      <span class="title mt-1">
                        Craft of Survival - Gladiators
                      </span>
                    </a>
                  </div>
                  <div class="col-4 col-md-1-5  mb-md-0 mb-2">
                    <a href="https://app-portal.foxart.co/apps/last-shelter-survival">
                      <img
                        src="https://app-portal.foxart.co/images/1696098538.webp"
                        class="lazy img-fluid rounded"
                        width="200"
                        height="200"
                        alt="Last Shelter: Survival"
                      />
                      <span class="title mt-1">Last Shelter: Survival</span>
                    </a>
                  </div>
                  <div class="col-4 col-md-1-5  mb-md-0 mb-2">
                    <a href="https://app-portal.foxart.co/apps/dawn-of-zombies-survival-game">
                      <img
                        src="https://app-portal.foxart.co/images/1696098537.webp"
                        class="lazy img-fluid rounded"
                        width="200"
                        height="200"
                        alt="Dawn of Zombies: Survival Game"
                      />
                      <span class="title mt-1">
                        Dawn of Zombies: Survival Game
                      </span>
                    </a>
                  </div>
                  <div class="col-4 col-md-1-5  mb-md-0 mb-2">
                    <a href="https://app-portal.foxart.co/apps/merge-survival-wasteland">
                      <img
                        src="https://app-portal.foxart.co/images/1696117713.webp"
                        class="lazy img-fluid rounded"
                        width="200"
                        height="200"
                        alt="Merge Survival : Wasteland"
                      />
                      <span class="title mt-1">Merge Survival : Wasteland</span>
                    </a>
                  </div>
                  <div class="col-4 col-md-1-5  mb-md-0 mb-2">
                    <a href="https://app-portal.foxart.co/apps/aod-vikings-valhalla-game">
                      <img
                        src="https://app-portal.foxart.co/images/1695819174.webp"
                        class="lazy img-fluid rounded"
                        width="200"
                        height="200"
                        alt="AoD Vikings: Valhalla Game"
                      />
                      <span class="title mt-1">AoD Vikings: Valhalla Game</span>
                    </a>
                  </div>
                  <div class="col-4 col-md-1-5  mb-md-0 mb-2">
                    <a href="https://app-portal.foxart.co/apps/viking-clan-ragnarok">
                      <img
                        src="https://app-portal.foxart.co/images/1695819157.webp"
                        class="lazy img-fluid rounded"
                        width="200"
                        height="200"
                        alt="Viking Clan: Ragnarok"
                      />
                      <span class="title mt-1">Viking Clan: Ragnarok</span>
                    </a>
                  </div>
                  <div class="col-4 col-md-1-5  mb-md-0 mb-2">
                    <a href="https://app-portal.foxart.co/apps/vikings-war-of-clans">
                      <img
                        src="https://app-portal.foxart.co/images/1695819133.webp"
                        class="lazy img-fluid rounded"
                        width="200"
                        height="200"
                        alt="Vikings: War of Clans"
                      />
                      <span class="title mt-1">Vikings: War of Clans</span>
                    </a>
                  </div>
                  <div class="col-4 col-md-1-5 d-md-none d-md-block  mb-md-0 mb-2">
                    <a href="https://app-portal.foxart.co/apps/asphalt-9-legends">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/1695819111.webp"
                        class="lazy img-fluid rounded"
                        width="200"
                        height="200"
                        alt="Asphalt 9: Legends"
                      />
                      <span class="title mt-1">Asphalt 9: Legends</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="shadow-sm p-2 bg-white rounded mb-3 pb-0">
              <div class="m-1">
                <a
                  href="https://app-portal.foxart.co/recently-updated-apps"
                  class="more float-end"
                >
                  More »
                </a>
                <h2 class="section-title">Recently Updated Apps</h2>
                <div class="row app-list">
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/conflict-of-nations-ww3-game">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1697915044.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Conflict of Nations: WW3 Game"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Conflict of Nations: WW3 Game
                          </span>
                          <span class="developer my-md-1 my-0">
                            Dorado Games / DOG Productions Ltd
                          </span>
                          <span class="date">Nov 28, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/world-war-heroes-ww2-pvp-fps">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1695596202.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="World War Heroes — WW2 PvP FPS"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            World War Heroes — WW2 PvP FPS
                          </span>
                          <span class="developer my-md-1 my-0">
                            Azur Interactive Games Limited
                          </span>
                          <span class="date">Nov 24, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/world-war-armies-ww2-pvp-rts">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1695596241.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="World War Armies: WW2 PvP RTS"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            World War Armies: WW2 PvP RTS
                          </span>
                          <span class="developer my-md-1 my-0">
                            Hypemasters, Inc.
                          </span>
                          <span class="date">Nov 24, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/road-to-valor-world-war-ii">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1695596242.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Road to Valor: World War II"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Road to Valor: World War II</span>
                          <span class="developer my-md-1 my-0">
                            Dreamotion Inc.
                          </span>
                          <span class="date">Nov 24, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/world-of-war-machines-ww2">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1695596244.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="World of War Machines - WW2"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">World of War Machines - WW2</span>
                          <span class="developer my-md-1 my-0">
                            Bigbreakgames
                          </span>
                          <span class="date">Nov 24, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/rising-war-for-dominion">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1695596246.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Rising: War for Dominion"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Rising: War for Dominion</span>
                          <span class="developer my-md-1 my-0">
                            NEWHOPE TECH PTE.LTD.
                          </span>
                          <span class="date">Nov 24, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/hot-wheels-unlimited">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1695596283.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Hot Wheels Unlimited"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Hot Wheels Unlimited</span>
                          <span class="developer my-md-1 my-0">
                            Budge Studios
                          </span>
                          <span class="date">Nov 24, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/csr-2-realistic-drag-racing">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1695596285.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="CSR 2 Realistic Drag Racing"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">CSR 2 Realistic Drag Racing</span>
                          <span class="developer my-md-1 my-0">
                            NaturalMotionGames Ltd
                          </span>
                          <span class="date">Nov 24, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/need-for-speed-no-limits">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/1695596286.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Need for Speed™ No Limits"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Need for Speed™ No Limits</span>
                          <span class="developer my-md-1 my-0">
                            ELECTRONIC ARTS
                          </span>
                          <span class="date">Nov 24, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center mb-3">
              <img
                src="https://app-portal.foxart.co/ads/16209067429750802881.webp"
                alt=""
                class="lazy img-fluid"
              />
            </div>

            <a href="https://app-portal.foxart.co/topics" class="float-end">
              All Topics »
            </a>
            <h2 class="h2-title">Topics</h2>
            <div class="row topics pt-2">
              <div class="col-md-4 col-12 mb-3">
                <a href="https://app-portal.foxart.co/topics/best-survival-games-on-android">
                  <img
                    src="https://app-portal.foxart.co/images/pixel.png"
                    data-src="https://app-portal.foxart.co/images/topics/1698327192.webp"
                    class="lazy img-fluid rounded-top"
                    width="880"
                    height="514"
                    alt="Best Survival Games on Android"
                  />
                  <div class="topic-box rounded">
                    Best Survival Games on Android
                  </div>
                </a>
              </div>
              <div class="col-md-4 col-12 mb-3">
                <a href="https://app-portal.foxart.co/topics/the-best-tanks-games">
                  <img
                    src="https://app-portal.foxart.co/images/pixel.png"
                    data-src="https://app-portal.foxart.co/images/topics/1698327410.webp"
                    class="lazy img-fluid rounded-top"
                    width="880"
                    height="514"
                    alt="The Best Tanks Games"
                  />
                  <div class="topic-box rounded">The Best Tanks Games</div>
                </a>
              </div>
              <div class="col-md-4 col-12 mb-3">
                <a href="https://app-portal.foxart.co/topics/the-best-vpn-services-in-2023">
                  <img
                    src="https://app-portal.foxart.co/images/pixel.png"
                    data-src="https://app-portal.foxart.co/images/topics/1698326942.webp"
                    class="lazy img-fluid rounded-top"
                    width="880"
                    height="514"
                    alt="The best VPN services in 2023"
                  />
                  <div class="topic-box rounded">
                    The best VPN services in 2023
                  </div>
                </a>
              </div>
            </div>

            <div class="shadow-sm p-2 bg-white rounded mb-3 pb-0">
              <div class="m-1">
                <a
                  href="https://app-portal.foxart.co/must-have-apps"
                  class="more float-end"
                >
                  More »
                </a>
                <h2 class="section-title">Must-Have Apps</h2>
                <div class="row app-list">
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/grim-soul-dark-survival-rpg">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696098827.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Grim Soul: Dark Survival RPG"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Grim Soul: Dark Survival RPG
                          </span>
                          <span class="developer mt-md-1 mt-0">
                            Brickworks Games Ltd
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/craft-of-survival-gladiators">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696098539.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Craft of Survival - Gladiators"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Craft of Survival - Gladiators
                          </span>
                          <span class="developer mt-md-1 mt-0">
                            101XP LIMITED
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/last-shelter-survival">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696098538.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Last Shelter: Survival"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Last Shelter: Survival</span>
                          <span class="developer mt-md-1 mt-0">
                            Long Tech Network Limited
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/dawn-of-zombies-survival-game">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696098537.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Dawn of Zombies: Survival Game"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Dawn of Zombies: Survival Game
                          </span>
                          <span class="developer mt-md-1 mt-0">Royal Ark</span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/merge-survival-wasteland">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696117713.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Merge Survival : Wasteland"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Merge Survival : Wasteland</span>
                          <span class="developer mt-md-1 mt-0">
                            StickyHands Inc.
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/aod-vikings-valhalla-game">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1695819174.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="AoD Vikings: Valhalla Game"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">AoD Vikings: Valhalla Game</span>
                          <span class="developer mt-md-1 mt-0">
                            RoboBot Studio
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/viking-clan-ragnarok">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1695819157.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Viking Clan: Ragnarok"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Viking Clan: Ragnarok</span>
                          <span class="developer mt-md-1 mt-0">Kano Games</span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/vikings-war-of-clans">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1695819133.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Vikings: War of Clans"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Vikings: War of Clans</span>
                          <span class="developer mt-md-1 mt-0">
                            Plarium LLC
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/asphalt-9-legends">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1695819111.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Asphalt 9: Legends"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Asphalt 9: Legends</span>
                          <span class="developer mt-md-1 mt-0">
                            Gameloft SE
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/modern-tanks-war-tank-games">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1695601612.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Modern Tanks: War Tank Games"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Modern Tanks: War Tank Games
                          </span>
                          <span class="developer mt-md-1 mt-0">XDEVS LTD</span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/call-of-duty-mobile-season-8">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1695596404.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Call of Duty Mobile Season 8"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Call of Duty Mobile Season 8
                          </span>
                          <span class="developer mt-md-1 mt-0">
                            Activision Publishing, Inc.
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/future-tanks-war-tank-game">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1695596370.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Future Tanks: War Tank Game"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Future Tanks: War Tank Game</span>
                          <span class="developer mt-md-1 mt-0">XDEVS LTD</span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a href="https://app-portal.foxart.co/news" class="float-end">
              All News »
            </a>
            <h2 class="h2-title">News</h2>
            <div class="row topics pt-2">
              <div class="col-md-6 col-12 mb-3">
                <a href="https://app-portal.foxart.co/read/mac-or-windows-which-has-the-best">
                  <img
                    src="https://app-portal.foxart.co/images/pixel.png"
                    data-src="https://app-portal.foxart.co/images/news/1698326702.webp"
                    class="lazy img-fluid rounded-top"
                    width="880"
                    height="514"
                    alt="Mac or Windows: Which has the best?"
                  />
                  <div class="topic-box rounded">
                    Mac or Windows: Which has the best?
                  </div>
                </a>
              </div>
              <div class="col-md-6 col-12 mb-3">
                <a href="https://app-portal.foxart.co/read/what-happened-to-famous-nokia-company">
                  <img
                    src="https://app-portal.foxart.co/images/pixel.png"
                    data-src="https://app-portal.foxart.co/images/news/1698326424.webp"
                    class="lazy img-fluid rounded-top"
                    width="880"
                    height="514"
                    alt="What happened to famous Nokia Company?"
                  />
                  <div class="topic-box rounded">
                    What happened to famous Nokia Company?
                  </div>
                </a>
              </div>
            </div>

            <div class="shadow-sm p-2 pb-0 bg-white rounded">
              <div class="m-1">
                <a
                  href="https://app-portal.foxart.co/popular-apps-24-hours"
                  class="more float-end"
                >
                  More »
                </a>
                <h2 class="section-title">Popular Apps In Last 24 Hours</h2>
                <div class="row app-list">
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/jet-attack-move">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/16988308698886290.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Jet Attack Move"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Jet Attack Move</span>
                          <span class="developer mt-md-1 mt-0">
                            Arcade Air Combat
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/whatsapp-messenger">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696615620.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="WhatsApp Messenger"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">WhatsApp Messenger</span>
                          <span class="developer mt-md-1 mt-0">
                            WhatsApp LLC
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/c-ram-ciws-simulator">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/16988308441140909.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="C-RAM CIWS simulator"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">C-RAM CIWS simulator</span>
                          <span class="developer mt-md-1 mt-0">
                            Anti Air Gun, Air Defense Game
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/grim-soul-dark-survival-rpg">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696098827.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Grim Soul: Dark Survival RPG"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Grim Soul: Dark Survival RPG
                          </span>
                          <span class="developer mt-md-1 mt-0">
                            Brickworks Games Ltd
                          </span>
                          <svg
                            class="checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>{" "}
                          <span class="votes">5</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/war-thunder-mobile">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1697481299.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="War Thunder Mobile"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">War Thunder Mobile</span>
                          <span class="developer mt-md-1 mt-0">
                            Tanks, ships and aircraft
                          </span>
                          <svg
                            class="checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>{" "}
                          <span class="votes">5</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/road-to-valor-empires">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/16979438817332727.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Road to Valor: Empires"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Road to Valor: Empires</span>
                          <span class="developer mt-md-1 mt-0">
                            Dreamotion Inc.
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/craft-of-survival-gladiators">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696098539.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Craft of Survival - Gladiators"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Craft of Survival - Gladiators
                          </span>
                          <span class="developer mt-md-1 mt-0">
                            101XP LIMITED
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/nordvpn-fast-vpn-for-privacy">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696100594.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="NordVPN – fast VPN for privacy"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            NordVPN – fast VPN for privacy
                          </span>
                          <span class="developer mt-md-1 mt-0">
                            Nord Security
                          </span>
                          <svg
                            class="checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>{" "}
                          <span class="votes">5</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/kaspersky-fast-secure-vpn">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1697065415.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Kaspersky Fast Secure VPN"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Kaspersky Fast Secure VPN</span>
                          <span class="developer mt-md-1 mt-0">
                            Kaspersky ME
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/conflict-of-nations-ww3-game">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1697915044.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Conflict of Nations: WW3 Game"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Conflict of Nations: WW3 Game
                          </span>
                          <span class="developer mt-md-1 mt-0">
                            Dorado Games / DOG Productions Ltd
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/kaspersky-vpn-antivirus">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1697065407.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Kaspersky: VPN &amp; Antivirus"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Kaspersky: VPN &amp; Antivirus
                          </span>
                          <span class="developer mt-md-1 mt-0">
                            Kaspersky ME
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/last-shelter-survival">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696098538.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Last Shelter: Survival"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Last Shelter: Survival</span>
                          <span class="developer mt-md-1 mt-0">
                            Long Tech Network Limited
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/turbo-vpn-secure-vpn-proxy">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1697065395.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Turbo VPN - Secure VPN Proxy"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Turbo VPN - Secure VPN Proxy
                          </span>
                          <span class="developer mt-md-1 mt-0">
                            Innovative Connecting
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/asphalt-9-legends">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1695819111.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Asphalt 9: Legends"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Asphalt 9: Legends</span>
                          <span class="developer mt-md-1 mt-0">
                            Gameloft SE
                          </span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/dawn-of-zombies-survival-game">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696098537.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Dawn of Zombies: Survival Game"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Dawn of Zombies: Survival Game
                          </span>
                          <span class="developer mt-md-1 mt-0">Royal Ark</span>
                          <svg
                            class="star-not-checked"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="shadow-sm p-2 bg-category rounded mt-3 pb-0">
              <div class="m-1 mb-0">
                <a
                  href="https://app-portal.foxart.co/categories/games"
                  class="more float-end"
                >
                  More »
                </a>
                <h2 class="section-title">Games</h2>
                <div class="row app-list">
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/craft-of-survival-gladiators">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696098539.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Craft of Survival - Gladiators"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Craft of Survival - Gladiators
                          </span>
                          <span class="developer my-md-1 my-0">
                            101XP LIMITED
                          </span>
                          <span class="date">Sep 30, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/jet-attack-move">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/16988308698886290.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Jet Attack Move"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Jet Attack Move</span>
                          <span class="developer my-md-1 my-0">
                            Arcade Air Combat
                          </span>
                          <span class="date">Nov 01, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/c-ram-ciws-simulator">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/16988308441140909.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="C-RAM CIWS simulator"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">C-RAM CIWS simulator</span>
                          <span class="developer my-md-1 my-0">
                            Anti Air Gun, Air Defense Game
                          </span>
                          <span class="date">Nov 01, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/road-to-valor-empires">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/16979438817332727.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Road to Valor: Empires"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Road to Valor: Empires</span>
                          <span class="developer my-md-1 my-0">
                            Dreamotion Inc.
                          </span>
                          <span class="date">Oct 22, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/conflict-of-nations-ww3-game">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1697915044.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Conflict of Nations: WW3 Game"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Conflict of Nations: WW3 Game
                          </span>
                          <span class="developer my-md-1 my-0">
                            Dorado Games / DOG Productions Ltd
                          </span>
                          <span class="date">Oct 21, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/war-thunder-mobile">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1697481299.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="War Thunder Mobile"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">War Thunder Mobile</span>
                          <span class="developer my-md-1 my-0">
                            Tanks, ships and aircraft
                          </span>
                          <span class="date">Oct 16, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/grim-soul-dark-survival-rpg">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696098827.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Grim Soul: Dark Survival RPG"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Grim Soul: Dark Survival RPG
                          </span>
                          <span class="developer my-md-1 my-0">
                            Brickworks Games Ltd
                          </span>
                          <span class="date">Sep 30, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/last-shelter-survival">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696098538.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Last Shelter: Survival"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Last Shelter: Survival</span>
                          <span class="developer my-md-1 my-0">
                            Long Tech Network Limited
                          </span>
                          <span class="date">Sep 30, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/dawn-of-zombies-survival-game">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696098537.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Dawn of Zombies: Survival Game"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Dawn of Zombies: Survival Game
                          </span>
                          <span class="developer my-md-1 my-0">Royal Ark</span>
                          <span class="date">Sep 30, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/merge-survival-wasteland">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696117713.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Merge Survival : Wasteland"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Merge Survival : Wasteland</span>
                          <span class="developer my-md-1 my-0">
                            StickyHands Inc.
                          </span>
                          <span class="date">Sep 30, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/aod-vikings-valhalla-game">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1695819174.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="AoD Vikings: Valhalla Game"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">AoD Vikings: Valhalla Game</span>
                          <span class="developer my-md-1 my-0">
                            RoboBot Studio
                          </span>
                          <span class="date">Sep 27, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/viking-clan-ragnarok">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1695819157.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Viking Clan: Ragnarok"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Viking Clan: Ragnarok</span>
                          <span class="developer my-md-1 my-0">Kano Games</span>
                          <span class="date">Sep 27, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/vikings-war-of-clans">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1695819133.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Vikings: War of Clans"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Vikings: War of Clans</span>
                          <span class="developer my-md-1 my-0">
                            Plarium LLC
                          </span>
                          <span class="date">Sep 27, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/asphalt-9-legends">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1695819111.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Asphalt 9: Legends"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Asphalt 9: Legends</span>
                          <span class="developer my-md-1 my-0">
                            Gameloft SE
                          </span>
                          <span class="date">Sep 27, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/modern-tanks-war-tank-games">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1695601612.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Modern Tanks: War Tank Games"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Modern Tanks: War Tank Games
                          </span>
                          <span class="developer my-md-1 my-0">XDEVS LTD</span>
                          <span class="date">Sep 25, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="shadow-sm p-2 bg-category rounded mt-3 pb-0">
              <div class="m-1 mb-0">
                <a
                  href="https://app-portal.foxart.co/categories/security"
                  class="more float-end"
                >
                  More »
                </a>
                <h2 class="section-title">Security</h2>
                <div class="row app-list">
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/itop-vpn">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1697065434.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="iTop Vpn"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">iTop Vpn</span>
                          <span class="developer my-md-1 my-0">techway</span>
                          <span class="date">Oct 11, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/kaspersky-fast-secure-vpn">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1697065415.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Kaspersky Fast Secure VPN"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Kaspersky Fast Secure VPN</span>
                          <span class="developer my-md-1 my-0">
                            Kaspersky ME
                          </span>
                          <span class="date">Oct 11, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/kaspersky-vpn-antivirus">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1697065407.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Kaspersky: VPN &amp; Antivirus"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Kaspersky: VPN &amp; Antivirus
                          </span>
                          <span class="developer my-md-1 my-0">
                            Kaspersky ME
                          </span>
                          <span class="date">Oct 11, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/turbo-vpn-secure-vpn-proxy">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1697065395.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Turbo VPN - Secure VPN Proxy"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            Turbo VPN - Secure VPN Proxy
                          </span>
                          <span class="developer my-md-1 my-0">
                            Innovative Connecting
                          </span>
                          <span class="date">Oct 11, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/tunnelbear-vpn">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696528303.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="TunnelBear VPN"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">TunnelBear VPN</span>
                          <span class="developer my-md-1 my-0">
                            TunnelBear, LLC
                          </span>
                          <span class="date">Sep 30, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/expressvpn-vpn-fast-secure">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696100602.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="ExpressVPN: VPN Fast &amp; Secure"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            ExpressVPN: VPN Fast &amp; Secure
                          </span>
                          <span class="developer my-md-1 my-0">ExpressVPN</span>
                          <span class="date">Sep 30, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/nordvpn-fast-vpn-for-privacy">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696100594.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="NordVPN – fast VPN for privacy"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">
                            NordVPN – fast VPN for privacy
                          </span>
                          <span class="developer my-md-1 my-0">
                            Nord Security
                          </span>
                          <span class="date">Sep 30, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/vpn-super-unlimited-proxy">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696100583.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="VPN - Super Unlimited Proxy"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">VPN - Super Unlimited Proxy</span>
                          <span class="developer my-md-1 my-0">
                            VPN Super Inc
                          </span>
                          <span class="date">Sep 30, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-4 col-md-4 mb-md-3 mb-2">
                    <a href="https://app-portal.foxart.co/apps/secure-vpn-safer-internet">
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="https://app-portal.foxart.co/images/pixel.png"
                            data-src="https://app-portal.foxart.co/images/1696099935.webp"
                            class="lazy img-fluid"
                            width="200"
                            height="200"
                            alt="Secure VPN－Safer Internet"
                          />
                        </div>
                        <div class="col-md-8 ps-md-0 pt-md-0 pt-2">
                          <span class="title">Secure VPN－Safer Internet</span>
                          <span class="developer my-md-1 my-0">Signal Lab</span>
                          <span class="date">Sep 30, 2023</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-3">
              <img
                src="https://app-portal.foxart.co/images/pixel.png"
                data-src="https://app-portal.foxart.co/ads/970x250-starbucks-nitro.webp"
                alt=""
                class="lazy img-fluid"
              />
            </div>
          </div>

          <div class="col-md-3 ps-md-2 mt-md-0 mt-3">
            <div class="shadow-sm apps top-apps p-2 bg-white rounded mb-3">
              <div class="m-1">
                <a
                  href="https://app-portal.foxart.co/popular-apps"
                  class="more float-end"
                >
                  More »
                </a>
                <h2 class="section-title">Popular Apps</h2>
                <a href="https://app-portal.foxart.co/apps/jet-attack-move">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/16988308698886290.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Jet Attack Move"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">Jet Attack Move</span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">Arcade Air Combat</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/whatsapp-messenger">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1696615620.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="WhatsApp Messenger"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">WhatsApp Messenger</span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">WhatsApp LLC</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/grim-soul-dark-survival-rpg">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1696098827.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Grim Soul: Dark Survival RPG"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">
                        Grim Soul: Dark Survival RPG
                      </span>
                      <svg
                        class="checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>{" "}
                      <span class="votes">5</span>
                      <span class="developer">Brickworks Games Ltd</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/c-ram-ciws-simulator">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/16988308441140909.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="C-RAM CIWS simulator"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">C-RAM CIWS simulator</span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">
                        Anti Air Gun, Air Defense Game
                      </span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/war-thunder-mobile">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1697481299.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="War Thunder Mobile"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">War Thunder Mobile</span>
                      <svg
                        class="checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>{" "}
                      <span class="votes">5</span>
                      <span class="developer">Tanks, ships and aircraft</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/road-to-valor-empires">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/16979438817332727.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Road to Valor: Empires"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">Road to Valor: Empires</span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">Dreamotion Inc.</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/craft-of-survival-gladiators">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1696098539.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Craft of Survival - Gladiators"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">
                        Craft of Survival - Gladiators
                      </span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">101XP LIMITED</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/nordvpn-fast-vpn-for-privacy">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1696100594.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="NordVPN – fast VPN for privacy"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">
                        NordVPN – fast VPN for privacy
                      </span>
                      <svg
                        class="checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>{" "}
                      <span class="votes">5</span>
                      <span class="developer">Nord Security</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/kaspersky-fast-secure-vpn">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1697065415.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Kaspersky Fast Secure VPN"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">Kaspersky Fast Secure VPN</span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">Kaspersky ME</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/conflict-of-nations-ww3-game">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1697915044.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Conflict of Nations: WW3 Game"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">
                        Conflict of Nations: WW3 Game
                      </span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">
                        Dorado Games / DOG Productions Ltd
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="shadow-sm apps top-apps p-2 bg-white rounded mb-3">
              <div class="m-1">
                <a
                  href="https://app-portal.foxart.co/editors-choice"
                  class="more float-end"
                >
                  More »
                </a>
                <h2 class="section-title">Editor's Choice</h2>
                <a href="https://app-portal.foxart.co/apps/grim-soul-dark-survival-rpg">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1696098827.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Grim Soul: Dark Survival RPG"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">
                        Grim Soul: Dark Survival RPG
                      </span>{" "}
                      <span class="votes">5</span>
                      <span class="developer">Brickworks Games Ltd</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/craft-of-survival-gladiators">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1696098539.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Craft of Survival - Gladiators"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">
                        Craft of Survival - Gladiators
                      </span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">101XP LIMITED</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/last-shelter-survival">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1696098538.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Last Shelter: Survival"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">Last Shelter: Survival</span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">Long Tech Network Limited</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/dawn-of-zombies-survival-game">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1696098537.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Dawn of Zombies: Survival Game"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">
                        Dawn of Zombies: Survival Game
                      </span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">Royal Ark</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/merge-survival-wasteland">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1696117713.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Merge Survival : Wasteland"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">Merge Survival : Wasteland</span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">StickyHands Inc.</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/aod-vikings-valhalla-game">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1695819174.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="AoD Vikings: Valhalla Game"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">AoD Vikings: Valhalla Game</span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">RoboBot Studio</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/viking-clan-ragnarok">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1695819157.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Viking Clan: Ragnarok"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">Viking Clan: Ragnarok</span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">Kano Games</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/vikings-war-of-clans">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1695819133.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Vikings: War of Clans"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">Vikings: War of Clans</span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">Plarium LLC</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/asphalt-9-legends">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1695819111.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Asphalt 9: Legends"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">Asphalt 9: Legends</span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">Gameloft SE</span>
                    </div>
                  </div>
                </a>
                <div class="app-space"></div>
                <a href="https://app-portal.foxart.co/apps/modern-tanks-war-tank-games">
                  <div class="row mb-2">
                    <div class="col-3 pe-0">
                      <img
                        src="https://app-portal.foxart.co/images/1695601612.webp"
                        width="200"
                        height="200"
                        class="img-fluid lazy"
                        alt="Modern Tanks: War Tank Games"
                      />
                    </div>
                    <div class="col-9 my-auto">
                      <span class="app-title">
                        Modern Tanks: War Tank Games
                      </span>
                      <svg
                        class="star-not-checked"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <span class="developer">XDEVS LTD</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="shadow-sm apps top-apps p-2 pb-0 bg-white rounded mb-3">
              <div class="m-1 pb-1">
                <a
                  href="https://app-portal.foxart.co/all-categories"
                  class="float-end"
                >
                  All Categories »
                </a>
                <h3 class="section-title">Categories</h3>
                <div class="row right-column">
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/categories/games">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/categories/1698324057.webp"
                        alt="Games"
                        class="rounded-circle w-25px lazy"
                      />
                      Games
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/categories/entertainment">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/categories/1698324037.webp"
                        alt="Entertainment"
                        class="rounded-circle w-25px lazy"
                      />
                      Entertainment
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/categories/communication">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/categories/1698324138.webp"
                        alt="Communication"
                        class="rounded-circle w-25px lazy"
                      />
                      Communication
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/categories/e-mail">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/categories/1698324165.webp"
                        alt="E-mail"
                        class="rounded-circle w-25px lazy"
                      />
                      E-mail
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/categories/security">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/categories/1698324212.webp"
                        alt="Security"
                        class="rounded-circle w-25px lazy"
                      />
                      Security
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/categories/tools">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/categories/1698324238.webp"
                        alt="Tools"
                        class="rounded-circle w-25px lazy"
                      />
                      Tools
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/categories/media">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/categories/1698324340.webp"
                        alt="Media"
                        class="rounded-circle w-25px lazy"
                      />
                      Media
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/categories/internet">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/categories/1698324374.webp"
                        alt="Internet"
                        class="rounded-circle w-25px lazy"
                      />
                      Internet
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/categories/finance">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/categories/1698324401.webp"
                        alt="Finance"
                        class="rounded-circle w-25px lazy"
                      />
                      Finance
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/categories/design">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/categories/1698324447.webp"
                        alt="Design"
                        class="rounded-circle w-25px lazy"
                      />
                      Design
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/categories/education">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/categories/1698324468.webp"
                        alt="Education"
                        class="rounded-circle w-25px lazy"
                      />
                      Education
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/categories/it-tools">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/categories/1698324511.webp"
                        alt="IT Tools"
                        class="rounded-circle w-25px lazy"
                      />
                      IT Tools
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/categories/travel-local">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/categories/1698324561.webp"
                        alt="Travel &amp; Local"
                        class="rounded-circle w-25px lazy"
                      />
                      Travel &amp; Local
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="shadow-sm apps top-apps p-2 pb-0 bg-white rounded">
              <div class="m-1 pb-1">
                <a
                  href="https://app-portal.foxart.co/all-platforms"
                  class="float-end"
                >
                  All Platforms »
                </a>
                <h3 class="section-title">Platforms</h3>
                <div class="row right-column">
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/platforms/android">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/platforms/1698324710.webp"
                        alt="Android"
                        class="rounded-circle w-25px lazy"
                      />
                      Android
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/platforms/ios">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/platforms/1698324884.webp"
                        alt="iOS"
                        class="rounded-circle w-25px lazy"
                      />
                      iOS
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/platforms/windows">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/platforms/1698324737.webp"
                        alt="Windows"
                        class="rounded-circle w-25px lazy"
                      />
                      Windows
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/platforms/mac">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/platforms/1698324864.webp"
                        alt="Mac"
                        class="rounded-circle w-25px lazy"
                      />
                      Mac
                    </a>
                  </div>
                  <div class="col-6 mb-2 pb-1">
                    <a href="https://app-portal.foxart.co/platforms/linux">
                      <img
                        src="https://app-portal.foxart.co/images/pixel.png"
                        data-src="https://app-portal.foxart.co/images/platforms/1698324842.webp"
                        alt="Linux"
                        class="rounded-circle w-25px lazy"
                      />
                      Linux
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
