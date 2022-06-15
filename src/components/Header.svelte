<script lang="js">
    import { MenuIcon } from "@rgossiaux/svelte-heroicons/outline";
    import { Menu, MenuButton, MenuItems, MenuItem } from "@rgossiaux/svelte-headlessui";
</script>

<header class="w-full h-auto container mx-auto max-w-4xl bg-inherit border-[1px] border-white">
    <div class="p-2 h-full overflow-hidden 912px:p-4">
        <div class="hidden flex-row justify-end items-center space-x-4 912px:flex">
            <slot></slot>
        </div>
        <Menu class="flex flex-row justify-end items-center 912px:hidden">
            <MenuButton class="p-1 rounded-lg border-[1px] border-white">
                <MenuIcon class="w-6 h-6" />
            </MenuButton>
            <MenuItems class="ml-0 h-[120px] absolute inset-x-0 top-[52px] flex text-lg space-y-2 flex-col justify-center items-center text-black bg-white">
              <MenuItem let:active>
                <a href={null} class:active>เกี่ยวกับหมอหมึก</a>
              </MenuItem>
              <MenuItem let:active>
                <a href={null} class:active>บทความ</a>
              </MenuItem>
              <MenuItem let:active>
                <a href={null} class:active>จองคิว</a>
              </MenuItem>
            </MenuItems>
          </Menu>
    </div>
</header>
