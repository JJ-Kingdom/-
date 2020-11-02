<template lang="pug">
	.user
		.contentBox
			ul(class="topBtnBox animate__animated animate__fadeInLeft")
				li 首页
				li >
				li(class="active") 联系我们
			.TitleBox(class="animate__animated animate__fadeInDown animate__delay-.5s")
				div CONTACT US
				p 联系我们
			.box
				.boxList(class="one animate__animated animate__fadeInUpBig animate__delay-1s")
					.listTitle(class="animate__animated animate__fadeInUp animate__delay-3s") 地址
					.listLine(class="animate__animated animate__fadeIn animate__delay-2s")
					.listImage(class="animate__animated animate__fadeIn animate__delay-4s")
					.listTextBox(class="animate__animated animate__fadeIn animate__delay-4-8s")
						.listText 北京市大兴区
						.listText 金苑路32号1墥
						.listText 2层221室
				.boxList(class="tow animate__animated animate__fadeInDownBig animate__delay-1s")
					.listTitle(class="animate__animated animate__fadeInUp animate__delay-3s") 联系我们
					.listLine(class="animate__animated animate__fadeIn animate__delay-2s")
					.listImage(class="animate__animated animate__fadeIn animate__delay-4s")
					.listTextBox(class="animate__animated animate__fadeIn animate__delay-4-8s")
						.listText 联系电话:021-1234567999
						.listText 联系热线:100-1237999
				.boxList(class="three animate__animated animate__fadeInUpBig animate__delay-1s")
					.listTitle(class="animate__animated animate__fadeInUp animate__delay-3s") 电子邮箱
					.listLine(class="animate__animated animate__fadeIn animate__delay-2s")
					.listImage(class="animate__animated animate__fadeIn animate__delay-4s")
					.listTextBox(class="animate__animated animate__fadeIn animate__delay-4-8s")
						.listText 邮箱:XuanHe123@163.com
						.listText 邮箱:XuanHe@qq.com
				.boxList(class="four animate__animated animate__fadeInDownBig animate__delay-1s")
					.listTitle(class="animate__animated animate__fadeInUp animate__delay-3s") 传真
					.listLine(class="animate__animated animate__fadeIn animate__delay-2s")
					.listImage(class="animate__animated animate__fadeIn animate__delay-4s")
					.listTextBox(class="animate__animated animate__fadeIn animate__delay-4-8s")
						.listText 传真:10-99998888
						.listText 传真:10-99977766
				
</template>

<script>

export default {
  
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
		.contentBox
			width: 76%
			height: 66%
			background: transparent
			margin: 0 auto
			box-sizing: border-box
			.topBtnBox
				display: flex
				font-size: 0.18rem
				margin-left: 4%
				li
					margin-left: 0.05rem
					&.active
						color: #EFD8A6
			.TitleBox
				width: 100%
				height: 0.87rem
				text-align: center
				margin-top: 0.15rem
				div
					font-size: 0.6rem
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
					
					
</style>