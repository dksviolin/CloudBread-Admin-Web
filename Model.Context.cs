﻿//------------------------------------------------------------------------------
// <auto-generated>
//     이 코드는 템플릿에서 생성되었습니다.
//
//     이 파일을 수동으로 변경하면 응용 프로그램에서 예기치 않은 동작이 발생할 수 있습니다.
//     이 파일을 수동으로 변경하면 코드가 다시 생성될 때 변경 내용을 덮어씁니다.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CloudBread_Admin_Web
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class CBEntities : DbContext
    {
        public CBEntities()
            : base("name=CBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AdminMembers> AdminMembers { get; set; }
        public virtual DbSet<CloudBreadAdminLog> CloudBreadAdminLog { get; set; }
        public virtual DbSet<CloudBreadErrorLog> CloudBreadErrorLog { get; set; }
        public virtual DbSet<CloudBreadLog> CloudBreadLog { get; set; }
        public virtual DbSet<Coupon> Coupon { get; set; }
        public virtual DbSet<CouponMember> CouponMember { get; set; }
        public virtual DbSet<GameEventMember> GameEventMember { get; set; }
        public virtual DbSet<GameEvents> GameEvents { get; set; }
        public virtual DbSet<GiftDepositories> GiftDepositories { get; set; }
        public virtual DbSet<ItemLists> ItemLists { get; set; }
        public virtual DbSet<MemberAccountBlockLog> MemberAccountBlockLog { get; set; }
        public virtual DbSet<MemberGameInfoes> MemberGameInfoes { get; set; }
        public virtual DbSet<MemberGameInfoStages> MemberGameInfoStages { get; set; }
        public virtual DbSet<MemberItemPurchases> MemberItemPurchases { get; set; }
        public virtual DbSet<MemberItems> MemberItems { get; set; }
        public virtual DbSet<Members> Members { get; set; }
        public virtual DbSet<Notices> Notices { get; set; }
        public virtual DbSet<ServerInfo> ServerInfo { get; set; }
        public virtual DbSet<Sessions> Sessions { get; set; }
        public virtual DbSet<StatsData> StatsData { get; set; }
    }
}
