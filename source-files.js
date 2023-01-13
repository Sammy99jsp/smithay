var sourcesIndex = JSON.parse('{\
"calloop":["",[["sources",[["ping",[],["eventfd.rs"]]],["channel.rs","generic.rs","mod.rs","ping.rs","signals.rs","timer.rs","transient.rs"]],["sys",[],["epoll.rs","mod.rs"]]],["error.rs","io.rs","lib.rs","loop_logic.rs","macros.rs"]],\
"drm":["",[["buffer",[],["mod.rs"]],["control",[],["atomic.rs","connector.rs","crtc.rs","dumbbuffer.rs","encoder.rs","framebuffer.rs","mod.rs","plane.rs","property.rs"]]],["lib.rs","util.rs"]],\
"gbm":["",[],["buffer_object.rs","device.rs","lib.rs","surface.rs"]],\
"input":["",[["event",[["tablet_pad",[],["mode_group.rs"]],["tablet_tool",[],["tool.rs"]]],["device.rs","gesture.rs","keyboard.rs","pointer.rs","switch.rs","tablet_pad.rs","tablet_tool.rs","touch.rs"]]],["context.rs","device.rs","event.rs","lib.rs","seat.rs"]],\
"nix":["",[["mount",[],["linux.rs","mod.rs"]],["net",[],["if_.rs","mod.rs"]],["sys",[["ioctl",[],["linux.rs","mod.rs"]],["ptrace",[],["linux.rs","mod.rs"]],["socket",[],["addr.rs","mod.rs","sockopt.rs"]]],["aio.rs","epoll.rs","eventfd.rs","inotify.rs","memfd.rs","mman.rs","mod.rs","personality.rs","pthread.rs","quota.rs","reboot.rs","resource.rs","select.rs","sendfile.rs","signal.rs","signalfd.rs","stat.rs","statfs.rs","statvfs.rs","sysinfo.rs","termios.rs","time.rs","timer.rs","timerfd.rs","uio.rs","utsname.rs","wait.rs"]]],["dir.rs","env.rs","errno.rs","fcntl.rs","features.rs","ifaddrs.rs","kmod.rs","lib.rs","macros.rs","mqueue.rs","poll.rs","pty.rs","sched.rs","time.rs","ucontext.rs","unistd.rs"]],\
"slog":["",[["key",[],["mod.rs","static.rs"]]],["lib.rs"]],\
"smithay":["",[["backend",[["allocator",[["vulkan",[],["format.rs","mod.rs"]]],["dmabuf.rs","dumb.rs","format.rs","gbm.rs","mod.rs","swapchain.rs"]],["drm",[["device",[],["atomic.rs","fd.rs","legacy.rs","mod.rs"]],["node",[],["constants.rs","mod.rs"]],["surface",[],["atomic.rs","gbm.rs","legacy.rs","mod.rs"]]],["error.rs","mod.rs"]],["egl",[],["context.rs","device.rs","display.rs","error.rs","ffi.rs","mod.rs","native.rs","surface.rs"]],["input",[],["mod.rs","tablet.rs"]],["libinput",[],["mod.rs","tablet.rs"]],["renderer",[["element",[],["memory.rs","mod.rs","surface.rs","texture.rs","utils.rs"]],["gles2",[],["mod.rs","shaders.rs","version.rs"]],["multigpu",[],["egl.rs","mod.rs"]],["utils",[],["mod.rs","wayland.rs"]]],["damage.rs","glow.rs","mod.rs"]],["session",[],["libseat.rs","mod.rs"]],["vulkan",[],["inner.rs","mod.rs","phd.rs","version.rs"]],["winit",[],["input.rs","mod.rs"]],["x11",[],["buffer.rs","error.rs","extension.rs","input.rs","mod.rs","surface.rs","window_inner.rs"]]],["mod.rs","udev.rs"]],["desktop",[["space",[["element",[],["mod.rs","wayland.rs"]],["wayland",[],["layer.rs","window.rs"]]],["mod.rs","output.rs","utils.rs"]],["wayland",[["popup",[],["grab.rs","manager.rs","mod.rs"]]],["layer.rs","utils.rs","window.rs"]]],["mod.rs"]],["input",[["keyboard",[],["keymap_file.rs","mod.rs","modifiers_state.rs","xkb_config.rs"]],["pointer",[],["cursor_image.rs","grab.rs","mod.rs"]]],["mod.rs"]],["utils",[],["alive_tracker.rs","clock.rs","fd.rs","geometry.rs","ids.rs","mod.rs","sealed_file.rs","serial.rs","signaling.rs","user_data.rs","x11rb.rs"]],["wayland",[["buffer",[],["mod.rs"]],["compositor",[],["cache.rs","handlers.rs","mod.rs","transaction.rs","tree.rs"]],["data_device",[],["device.rs","dnd_grab.rs","mod.rs","seat_data.rs","server_dnd_grab.rs","source.rs"]],["dmabuf",[],["dispatch.rs","mod.rs"]],["fractional_scale",[],["mod.rs"]],["input_method",[],["input_method_handle.rs","input_method_keyboard_grab.rs","input_method_popup_surface.rs","mod.rs"]],["keyboard_shortcuts_inhibit",[],["dispatch.rs","mod.rs"]],["output",[],["handlers.rs","mod.rs","xdg.rs"]],["presentation",[],["mod.rs"]],["primary_selection",[],["device.rs","mod.rs","seat_data.rs","source.rs"]],["seat",[],["keyboard.rs","mod.rs","pointer.rs","touch.rs"]],["shell",[["kde",[],["decoration.rs","handlers.rs","mod.rs"]],["wlr_layer",[],["handlers.rs","mod.rs","types.rs"]],["xdg",[["handlers",[["surface",[],["popup.rs","toplevel.rs"]]],["positioner.rs","surface.rs","wm_base.rs"]]],["decoration.rs","handlers.rs","mod.rs"]]],["mod.rs"]],["shm",[],["handlers.rs","mod.rs","pool.rs"]],["tablet_manager",[],["mod.rs","tablet.rs","tablet_seat.rs","tablet_tool.rs"]],["text_input",[],["mod.rs","text_input_handle.rs"]],["viewporter",[],["mod.rs"]],["virtual_keyboard",[],["mod.rs","virtual_keyboard_handle.rs"]],["xdg_activation",[],["dispatch.rs","mod.rs"]]],["mod.rs","socket.rs"]],["xwayland",[],["mod.rs","x11_sockets.rs","xserver.rs"]]],["lib.rs","output.rs","reexports.rs"]],\
"udev":["",[],["device.rs","enumerator.rs","lib.rs","list.rs","monitor.rs","udev.rs","util.rs"]],\
"wayland_backend":["",[["rs",[["client_impl",[],["mod.rs"]],["server_impl",[],["client.rs","common_poll.rs","handle.rs","mod.rs","registry.rs"]]],["debug.rs","map.rs","mod.rs","socket.rs","wire.rs"]],["sys",[["client_impl",[],["mod.rs"]],["server_impl",[],["mod.rs"]]],["mod.rs"]],["types",[],["client.rs","mod.rs","server.rs"]]],["client_api.rs","core_interfaces.rs","lib.rs","protocol.rs","server_api.rs"]],\
"wayland_protocols":["",[],["ext.rs","lib.rs","protocol_macro.rs","wp.rs","xdg.rs","xwayland.rs"]],\
"wayland_server":["",[],["client.rs","dispatch.rs","display.rs","global.rs","lib.rs","socket.rs"]],\
"winit":["",[["platform",[],["mod.rs","run_return.rs","unix.rs"]],["platform_impl",[["linux",[["wayland",[["event_loop",[],["mod.rs","proxy.rs","sink.rs","state.rs"]],["seat",[["keyboard",[],["handlers.rs","keymap.rs","mod.rs"]],["pointer",[],["data.rs","handlers.rs","mod.rs"]],["text_input",[],["handlers.rs","mod.rs"]],["touch",[],["handlers.rs","mod.rs"]]],["mod.rs"]],["window",[],["mod.rs","shim.rs"]]],["env.rs","mod.rs","output.rs"]],["x11",[["ime",[],["callbacks.rs","context.rs","inner.rs","input_method.rs","mod.rs"]],["util",[],["atom.rs","client_msg.rs","cursor.rs","format.rs","geometry.rs","hint.rs","icon.rs","input.rs","keys.rs","memory.rs","mod.rs","modifiers.rs","randr.rs","window_property.rs","wm.rs"]]],["dnd.rs","event_processor.rs","events.rs","ffi.rs","mod.rs","monitor.rs","window.rs","xdisplay.rs"]]],["mod.rs"]]],["mod.rs"]]],["dpi.rs","error.rs","event.rs","event_loop.rs","icon.rs","lib.rs","monitor.rs","window.rs"]],\
"x11rb":["",[["protocol",[],["bigreq.rs","dri3.rs","ge.rs","mod.rs","present.rs","randr.rs","render.rs","shape.rs","sync.rs","xc_misc.rs","xfixes.rs","xproto.rs"]],["rust_connection",[],["mod.rs","packet_reader.rs","stream.rs","write_buffer.rs"]]],["connection.rs","cookie.rs","errors.rs","event_loop_integration.rs","extension_manager.rs","lib.rs","properties.rs","utils.rs","wrapper.rs","x11_utils.rs"]]\
}');
createSourceSidebar();
