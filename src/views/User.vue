<template lang="pug">
	.user
		.contentBox
			<!-- el-switch(v-model="value1" active-text="中" inactive-text="英") -->
			ul(class="topBtnBox animate__animated animate__fadeInLeft")
				li {{$t('message.homeNav')}}
				li >
				li(class="active" @click="onClick") {{$t('message.userNav')}}
			.TitleBox(class="animate__animated animate__fadeInDown animate__delay-.5s")
				div CONTACT US
				p {{$t('message.title')}}
			.box
				.boxList(class="one animate__animated animate__fadeInUpBig animate__delay-1s")
					.listTitle(class="animate__animated animate__fadeInUp animate__delay-3s") {{$t('message.itemOne.listTitle')}}
					.listLine(class="animate__animated animate__fadeIn animate__delay-2s")
					.listImage(class="animate__animated animate__fadeIn animate__delay-4s")
					.listTextBox(class="animate__animated animate__fadeIn animate__delay-4-8s")
						.listText {{$t('message.itemOne.region')}}
						.listText {{$t('message.itemOne.House')}}
						.listText {{$t('message.itemOne.room')}}
				.boxList(class="tow animate__animated animate__fadeInDownBig animate__delay-1s")
					.listTitle(class="animate__animated animate__fadeInUp animate__delay-3s") {{$t('message.itemTow.listTitle')}}
					.listLine(class="animate__animated animate__fadeIn animate__delay-2s")
					.listImage(class="animate__animated animate__fadeIn animate__delay-4s")
					.listTextBox(class="animate__animated animate__fadeIn animate__delay-4-8s")
						.listText {{$t('message.itemTow.contactNumber')}}
						.listText {{$t('message.itemTow.ContactHotline')}}
				.boxList(class="three animate__animated animate__fadeInUpBig animate__delay-1s")
					.listTitle(class="animate__animated animate__fadeInUp animate__delay-3s") {{$t('message.itemThree.listTitle')}}
					.listLine(class="animate__animated animate__fadeIn animate__delay-2s")
					.listImage(class="animate__animated animate__fadeIn animate__delay-4s")
					.listTextBox(class="animate__animated animate__fadeIn animate__delay-4-8s")
						.listText {{$t('message.itemThree.mailBox1')}}
						.listText {{$t('message.itemThree.mailBox2')}}
				.boxList(class="four animate__animated animate__fadeInDownBig animate__delay-1s")
					.listTitle(class="animate__animated animate__fadeInUp animate__delay-3s") {{$t('message.itemFour.listTitle')}}
					.listLine(class="animate__animated animate__fadeIn animate__delay-2s")
					.listImage(class="animate__animated animate__fadeIn animate__delay-4s")
					.listTextBox(class="animate__animated animate__fadeIn animate__delay-4-8s")
						.listText {{$t('message.itemFour.fax1')}}
						.listText {{$t('message.itemFour.fax2')}}
				
</template>

<script>

export default {
	data(){
		return{
			// value1: true
		}
	},
	mounted(){
		console.log(this.$i18n)
	},
	methods:{
		onClick(){
			this.$i18n.locale = this.$i18n.locale=='en'?'ja':'en'
		}
	}
}
</script>
<style lang="sass">
	.animate__delay-4-8s
		animation-delay: 4.8s
	.user
		width: 100vw
		height: 100vh
		background: url('~@/assets/image/userImage/背景.png') no-repeat
		background-size: 100% 100%
		padding-top: 1.28rem
		position: absolute
		top: 0
		left: 0
		.contentBox
			width: 76%
			height: 66%
			background: transparent
			margin: 0 auto
			box-sizing: border-box
			.el-switch
				font-size: 0.14rem
				position: fixed
				top: 1.2rem
				right: 15%
			.topBtnBox
				display: flex
				font-size: 0.18rem
				margin-left: 4%
				li
					margin-left: 0.05rem
					color: white
					&.active
						color: #EFD8A6
			.TitleBox
				width: 100%
				height: 0.87rem
				text-align: center
				margin-top: 0.15rem
				div
					font-size: 0.6rem
					color: white
				p
					font-size: 0.3rem
					color: #EFD8A6
			.box
				width: 100%
				height: 4.43rem
				display: flex
				justify-content: space-between
				margin-top: 1.44rem
				.boxList
					border-radius: 0.3rem
					text-align: center
					&.one
						width: 3.31rem
						height: 4.43rem
						background: rgba(0, 175, 255, 0.271)
						color: white
						&.one:hover
							background: rgba(0, 175, 255, 0.6)
						.listTitle
							font-size: 0.24rem
							color: #EFD8A6
							margin-top: 0.57rem
							margin-bottom: 0.11rem
						.listLine
							width: 1.15rem
							height: 1px
							margin: 0 auto
							background-color: rgb(247, 223, 171)
						.listText
							font-size: 0.2rem
							margin-top: 0.1rem
						.listImage
							width: 0.47rem
							height: 0.61rem
							background: url('~@/assets/image/userImage/coordinate.png') no-repeat
							background-size: 100% 100%
							margin: 0 auto
							margin-top: 0.5rem
							margin-bottom: 0.42rem
					&.tow
						width: 3.31rem
						height: 4.43rem
						background: rgba(255, 104, 104, 0.271)
						color: white
						&.tow:hover
							background: rgba(255, 104, 104, 0.6)
						.listTitle
							font-size: 0.24rem
							color: #EFD8A6
							margin-top: 0.57rem
							margin-bottom: 0.11rem
						.listLine
							width: 1.15rem
							height: 1px
							margin: 0 auto
							background-color: rgb(247, 223, 171)
						.listText
							font-size: 0.2rem
							margin-top: 0.1rem
						.listImage
							width: 0.47rem
							height: 0.61rem
							background: url('~@/assets/image/userImage/Telephone.png') no-repeat
							background-size: 100% 100%
							margin: 0 auto
							margin-top: 0.5rem
							margin-bottom: 0.42rem
					&.three
						width: 3.31rem
						height: 4.43rem
						background: rgba(128, 103, 255, 0.271)
						color: white
						&.three:hover
							background: rgba(128, 103, 255, 0.6)
						.listTitle
							font-size: 0.24rem
							color: #EFD8A6
							margin-top: 0.57rem
							margin-bottom: 0.11rem
						.listLine
							width: 1.15rem
							height: 1px
							margin: 0 auto
							background-color: rgb(247, 223, 171)
						.listText
							font-size: 0.2rem
							margin-top: 0.1rem
						.listImage
							width: 0.47rem
							height: 0.61rem
							background: url('~@/assets/image/userImage/Mailbox.png') no-repeat
							background-size: 100% 100%
							margin: 0 auto
							margin-top: 0.5rem
							margin-bottom: 0.42rem
					&.four
						width: 3.31rem
						height: 4.43rem
						background: rgba(254, 137, 89, 0.271)
						color: white
						&.four:hover
							background: rgba(254, 137, 89, 0.6)
						.listTitle
							font-size: 0.24rem
							color: #EFD8A6
							margin-top: 0.57rem
							margin-bottom: 0.11rem
						.listLine
							width: 1.15rem
							height: 1px
							margin: 0 auto
							background-color: rgb(247, 223, 171)
						.listText
							font-size: 0.2rem
							margin-top: 0.1rem
						.listImage
							width: 0.47rem
							height: 0.61rem
							background: url('~@/assets/image/userImage/Fax.png') no-repeat
							background-size: 100% 100%
							margin: 0 auto
							margin-top: 0.5rem
							margin-bottom: 0.42rem
@media screen and (max-width:1000px)
	.box
		width: 100% !important
		display: flex !important
		flex-wrap: wrap !important
		flex: 1 !important
		margin-top: 0.5rem !important
		.boxList
			width: 45% !important
			height: 4rem !important
			margin-Top: 0.5rem !important
	
</style>