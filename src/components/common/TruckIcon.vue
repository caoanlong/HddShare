<template>
    <bm-overlay
        ref="customOverlay"
        pane="labelPane"
        class="truckIcon"
        @draw="draw">
        <img :src="__IMGWEBSERVER__ + truck.headPicture"/>
    </bm-overlay>
</template>
<script>
	export default {
		props: {
			truck: {
				type: Object
            }
		},
		data () {
			return {
				position: {
					lat: 22.527858,
					lng: 113.945806
				},
				radius: 500
			}
        },
        watch: {
            truck: {
                handler () {
                    this.$refs.customOverlay.reload()
                },
                deep: true
            }
        },
		methods: {
			draw ({el, BMap, map}) {
				const pixel = map.pointToOverlayPixel(new BMap.Point(this.truck.lng,this.truck.lat))
				el.style.left = pixel.x + 'px'
				el.style.top = pixel.y + 'px'
			}
		}
	}
</script>
<style lang="stylus" scoped>
    .truckIcon
        width 46px
        height 46px
        border-radius 23px
        // background url('../../assets/img/location.svg') no-repeat
        background #fff
        box-shadow 0 0 5px 0 rgba(0,0,0,.5)
        color #ddd
        text-align center
        padding 3px
        position absolute
        z-index 10
        &.selected
            border 1px solid #f60
            padding 2px
            box-shadow 0 0 2px #f60
            z-index 100
        img
            width 40px
            height 40px
            border-radius 18px
            position relative
            z-index 20
            
</style>